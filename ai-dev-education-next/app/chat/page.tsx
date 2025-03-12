'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import ChatContainer from '@/components/chat/ChatContainer';
import { Message } from '@/lib/openrouter';
import { Trash2, MessageCircle, Clock, Plus } from 'lucide-react';

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  lastUpdated: number;
  messages: Message[];
}

export default function ChatPage() {
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use refs to track the state between renders without causing re-renders
  const lastUpdateRef = useRef<Record<string, string>>({});
  const updateInProgressRef = useRef(false);
  const initialLoadCompletedRef = useRef(false);
  
  // A stable reference to the current state that doesn't trigger re-renders when read
  const chatHistoriesRef = useRef<ChatHistory[]>([]);
  useEffect(() => {
    chatHistoriesRef.current = chatHistories;
  }, [chatHistories]);

  // Create a new chat conversation
  const createNewChat = useCallback(() => {
    if (updateInProgressRef.current) return null;
    
    const newChatId = `chat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    updateInProgressRef.current = true;
    
    // Add the new chat to histories
    setChatHistories(prev => {
      const newState = [
        {
          id: newChatId,
          title: 'New Chat',
          lastMessage: '',
          lastUpdated: Date.now(),
          messages: []
        },
        ...prev
      ];
      
      // After state update, set the active chat
      setTimeout(() => {
        setActiveChatId(newChatId);
        updateInProgressRef.current = false;
      }, 0);
      
      return newState;
    });
    
    return newChatId;
  }, []);

  // Load chat histories from localStorage - only run once on component mount
  useEffect(() => {
    if (initialLoadCompletedRef.current) return;
    
    const loadChatHistories = () => {
      if (typeof window === 'undefined' || updateInProgressRef.current) return;
      
      updateInProgressRef.current = true;
      setIsLoading(true);
      
      try {
        // Find all chat histories in localStorage
        const histories: ChatHistory[] = [];
        const chatIdPattern = /^ai-dev-education-chat-(.+)$/;
        
        // Keep track of which keys we've already processed
        const processedChatIds = new Set<string>();
        
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && chatIdPattern.test(key)) {
            const chatId = key.match(chatIdPattern)?.[1];
            
            // Skip if we've already processed this chat ID or if it's a special key
            if (!chatId || processedChatIds.has(chatId) || 
                chatId === 'default' || 
                chatId.startsWith('floating-') ||
                key.includes('-model') ||
                key.includes('-last-update')) {
              continue;
            }
            
            processedChatIds.add(chatId);
            
            try {
              const messagesJson = localStorage.getItem(key);
              if (messagesJson) {
                const messages = JSON.parse(messagesJson) as Message[];
                if (messages.length > 0) {
                  // Store the serialized messages for comparison
                  lastUpdateRef.current[chatId] = messagesJson;
                  
                  // Find the last user message to use as a title
                  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
                  const title = lastUserMessage && lastUserMessage.content
                    ? lastUserMessage.content.substring(0, 30) + (lastUserMessage.content.length > 30 ? '...' : '') 
                    : 'New Chat';
                  
                  // Find the last message for preview
                  const lastMessage = messages[messages.length - 1]?.content
                    ? messages[messages.length - 1].content.substring(0, 60) + 
                      (messages[messages.length - 1].content.length > 60 ? '...' : '')
                    : 'No content';
                  
                  histories.push({
                    id: chatId,
                    title,
                    lastMessage,
                    lastUpdated: Date.now(),
                    messages
                  });
                }
              }
            } catch (e) {
              console.error(`Error parsing chat history for ${chatId}:`, e);
            }
          }
        }
        
        // Sort by most recent first
        histories.sort((a, b) => b.lastUpdated - a.lastUpdated);
        
        // Set state all at once to avoid cascading updates
        initialLoadCompletedRef.current = true;
        
        // Update state in a timeout to break the synchronous update cycle
        setTimeout(() => {
          setChatHistories(histories);
          
          if (histories.length > 0) {
            setActiveChatId(histories[0].id);
          } else {
            // Create a new chat if there's none
            createNewChat();
          }
          
          setIsLoading(false);
          updateInProgressRef.current = false;
        }, 0);
        
      } catch (error) {
        console.error('Error loading chat histories:', error);
        setIsLoading(false);
        updateInProgressRef.current = false;
        initialLoadCompletedRef.current = true;
      }
    };
    
    loadChatHistories();
    
    // This effect should only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateChatHistory = useCallback((chatId: string, messages: Message[]) => {
    if (!chatId || updateInProgressRef.current) return;
    
    // Create a snapshot of the messages for comparison
    const messagesJson = JSON.stringify(messages);
    
    // Skip update if we've just processed these exact messages for this chat
    if (lastUpdateRef.current[chatId] === messagesJson) {
      return;
    }
    
    // Mark that we're processing an update to prevent concurrent operations
    updateInProgressRef.current = true;
    
    // Update our ref to remember what we're processing
    lastUpdateRef.current[chatId] = messagesJson;
    
    if (messages.length === 0) {
      // Handle chat deletion
      setChatHistories(prev => {
        const filtered = prev.filter(h => h.id !== chatId);
        
        // Set another chat as active if this was the active chat
        if (filtered.length > 0 && activeChatId === chatId) {
          // Use setTimeout to avoid state updates during render
          setTimeout(() => {
            setActiveChatId(filtered[0].id);
            updateInProgressRef.current = false;
          }, 0);
        } else if (filtered.length === 0) {
          // If we're deleting the last chat, create a new one after the state update completes
          setTimeout(() => {
            createNewChat();
            updateInProgressRef.current = false;
          }, 0);
        } else {
          updateInProgressRef.current = false;
        }
        
        return filtered;
      });
      
      return;
    }

    // Update the chat history
    setChatHistories(prev => {
      // Find the history we're updating
      const historyIndex = prev.findIndex(h => h.id === chatId);
      
      // If not found, release the lock and return unchanged state
      if (historyIndex === -1) {
        updateInProgressRef.current = false;
        return prev;
      }
      
      // Check if the messages are the same as what's already in history
      // This is a redundant check, but helps ensure we don't trigger unnecessary renders
      if (JSON.stringify(prev[historyIndex].messages) === messagesJson) {
        updateInProgressRef.current = false;
        return prev;
      }
      
      // Create a copy of the array for the update
      const updated = [...prev];
      
      // Find the last user message to use as a title
      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
      const title = lastUserMessage && lastUserMessage.content
        ? lastUserMessage.content.substring(0, 30) + (lastUserMessage.content.length > 30 ? '...' : '') 
        : 'New Chat';
      
      // Find the last message for preview
      const lastMessage = messages[messages.length - 1]?.content
        ? messages[messages.length - 1].content.substring(0, 60) + 
          (messages[messages.length - 1].content.length > 60 ? '...' : '')
        : 'No content';
      
      // Create the updated history item
      updated[historyIndex] = {
        ...updated[historyIndex],
        title,
        lastMessage,
        lastUpdated: Date.now(),
        messages
      };
      
      // Release the update lock
      setTimeout(() => {
        updateInProgressRef.current = false;
      }, 0);
      
      return updated;
    });
  }, [activeChatId, createNewChat]);

  const deleteChat = useCallback((chatId: string) => {
    if (updateInProgressRef.current) return;
    
    if (confirm('Are you sure you want to delete this chat?')) {
      updateInProgressRef.current = true;
      
      // Remove from localStorage
      localStorage.removeItem(`ai-dev-education-chat-${chatId}`);
      localStorage.removeItem(`ai-dev-education-chat-${chatId}-model`);
      localStorage.removeItem(`ai-dev-education-chat-${chatId}-last-update`);
      
      // Remove from tracking ref
      delete lastUpdateRef.current[chatId];
      
      // Remove from state
      setChatHistories(prev => {
        const filtered = prev.filter(h => h.id !== chatId);
        
        // If the active chat was deleted, select another one
        if (activeChatId === chatId) {
          if (filtered.length > 0) {
            // Use setTimeout to avoid state updates during render
            setTimeout(() => {
              setActiveChatId(filtered[0].id);
              updateInProgressRef.current = false;
            }, 0);
          } else {
            // If we're deleting the last chat, create a new one
            setTimeout(() => {
              createNewChat();
              updateInProgressRef.current = false;
            }, 0);
          }
        } else {
          updateInProgressRef.current = false;
        }
        
        return filtered;
      });
    }
  }, [activeChatId, createNewChat]);

  // Memoize the callback to prevent unnecessary re-renders
  const memoizedUpdateChatHistory = useCallback((messages: Message[]) => {
    if (activeChatId) {
      updateChatHistory(activeChatId, messages);
    }
  }, [activeChatId, updateChatHistory]);

  return (
    <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8 min-h-[calc(100vh-16rem)]">
      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-16rem)]">
        {/* Chat History Sidebar */}
        <div className="w-full md:w-80 border-r border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold tracking-tight mb-2">Chat History</h2>
            <button 
              onClick={() => createNewChat()}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Chat
            </button>
          </div>
          
          <div className="overflow-y-auto flex-grow">
            {chatHistories.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-center p-4">
                <MessageCircle className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-gray-500">No chat history yet. Start a new conversation!</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                {chatHistories.map(chat => (
                  <li 
                    key={chat.id}
                    className={`group hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      activeChatId === chat.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <div 
                      onClick={() => setActiveChatId(chat.id)}
                      className="w-full text-left p-4 flex flex-col cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-medium truncate">{chat.title}</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteChat(chat.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                          aria-label="Delete chat"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                        {chat.lastMessage}
                      </span>
                      <div className="flex items-center mt-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {new Date(chat.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {/* Main Chat Container */}
        <div className="flex-grow bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 h-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Loading chats...</p>
            </div>
          ) : activeChatId ? (
            <ChatContainer 
              key={activeChatId} // Add key to ensure a fresh instance when changing chats
              chatId={activeChatId} 
              onChatHistoryChange={memoizedUpdateChatHistory}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select or create a chat to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
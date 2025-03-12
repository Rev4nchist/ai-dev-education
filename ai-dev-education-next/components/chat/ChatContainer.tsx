'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ModelSelector from './ModelSelector';
import { Message, availableModels } from '@/lib/openrouter';
import { Loader2 } from 'lucide-react';

interface ChatContainerProps {
  initialMessages?: Message[];
  className?: string;
  compact?: boolean;
  chatId?: string;
  onChatHistoryChange?: (messages: Message[]) => void;
}

// Helper function to generate a unique chat ID
const generateChatId = () => {
  return `chat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

const ChatContainer: React.FC<ChatContainerProps> = ({
  initialMessages = [],
  className = '',
  compact = false,
  chatId = 'default',
  onChatHistoryChange
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(availableModels[0].id);
  const [waitingForResponseUI, setWaitingForResponseUI] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const storageKey = `ai-dev-education-chat-${chatId}`;
  
  // Use refs to prevent infinite loops
  const chatIdRef = useRef<string>(chatId);
  const messagesRef = useRef<Message[]>([]);
  const updatePendingRef = useRef<boolean>(false);
  const initialLoadDoneRef = useRef<boolean>(false);
  const waitingForResponse = useRef<boolean>(false);
  
  // Update refs when deps change
  useEffect(() => {
    chatIdRef.current = chatId;
  }, [chatId]);
  
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);
  
  // Load messages from localStorage only once on mount or when chatId changes
  useEffect(() => {
    const loadMessages = () => {
      if (updatePendingRef.current) return;
      
      updatePendingRef.current = true;
      setIsLoading(true);
      
      try {
        const savedMessages = localStorage.getItem(storageKey);
        if (savedMessages && JSON.parse(savedMessages).length > 0) {
          setMessages(JSON.parse(savedMessages));
          // Initialize our ref with the loaded messages
          messagesRef.current = JSON.parse(savedMessages);
        } else if (initialMessages.length > 0) {
          setMessages(initialMessages);
        }

        const savedModel = localStorage.getItem(`${storageKey}-model`);
        if (savedModel) {
          const modelId = JSON.parse(savedModel);
          // Verify the model exists in availableModels
          if (availableModels.some(model => model.id === modelId)) {
            setSelectedModel(modelId);
          }
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
        setMessages([]);
      } finally {
        setIsLoading(false);
        // Use setTimeout to break the update cycle
        setTimeout(() => {
          updatePendingRef.current = false;
          initialLoadDoneRef.current = true;
        }, 0);
      }
    };
    
    // Reset state for new chat IDs
    if (chatId !== chatIdRef.current || !initialLoadDoneRef.current) {
      initialLoadDoneRef.current = false;
      loadMessages();
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId, initialMessages, storageKey]);

  // Save to localStorage without triggering parent updates
  const saveToLocalStorage = useCallback((newMessages: Message[]) => {
    if (!chatId || updatePendingRef.current) return;
    
    try {
      const messagesJson = JSON.stringify(newMessages);
      
      // Only save if the messages have actually changed
      if (messagesRef.current.toString() !== messagesJson) {
        localStorage.setItem(storageKey, messagesJson);
        localStorage.setItem(`${storageKey}-model`, JSON.stringify(selectedModel));
        localStorage.setItem(`${storageKey}-last-update`, Date.now().toString());
        
        // Update our ref to track what we've saved
        messagesRef.current = newMessages;
        
        return true; // Messages were updated
      }
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
    return false; // No update needed
  }, [selectedModel, storageKey]);
  
  // Notify parent component of changes, debounced to prevent circular updates
  const notifyParent = useCallback((newMessages: Message[]) => {
    if (!onChatHistoryChange || updatePendingRef.current) return;
    
    // Use timeout to break potential update loops
    setTimeout(() => {
      if (chatIdRef.current === chatId) {
        onChatHistoryChange(newMessages);
      }
    }, 100);
  }, [chatId, onChatHistoryChange]);
  
  // Scroll to bottom of chat
  const scrollToBottom = useCallback(() => {
    // Delay scrolling slightly to ensure DOM is ready
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);
  
  useEffect(() => {
    if (!isLoading && messages.length > 0) {
      scrollToBottom();
    }
  }, [isLoading, messages, scrollToBottom]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || waitingForResponse.current || updatePendingRef.current) return;
    
    updatePendingRef.current = true;
    waitingForResponse.current = true;
    setWaitingForResponseUI(true);
    
    // Add user message
    const userMessage: Message = { role: 'user', content };
    const updatedMessages = [...messagesRef.current, userMessage];
    
    setMessages(updatedMessages);
    saveToLocalStorage(updatedMessages);
    
    // Notify parent after a slight delay to prevent update cycles
    setTimeout(() => {
      notifyParent(updatedMessages);
      updatePendingRef.current = false;
    }, 50);
    
    try {
      // Scroll to bottom to show user message
      scrollToBottom();
      
      // Send message to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
          model: selectedModel
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.text || 'Sorry, I couldn\'t generate a response.'
      };
      
      const finalMessages = [...updatedMessages, assistantMessage];
      updatePendingRef.current = true;
      
      setMessages(finalMessages);
      saveToLocalStorage(finalMessages);
      
      // Notify parent after a slight delay to prevent update cycles
      setTimeout(() => {
        notifyParent(finalMessages);
        updatePendingRef.current = false;
      }, 50);
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        role: 'assistant', 
        content: 'Sorry, there was an error processing your request. Please try again later.'
      };
      
      const errorMessages = [...updatedMessages, errorMessage];
      updatePendingRef.current = true;
      
      setMessages(errorMessages);
      saveToLocalStorage(errorMessages);
      
      // Notify parent after a slight delay to prevent update cycles
      setTimeout(() => {
        notifyParent(errorMessages);
        updatePendingRef.current = false;
      }, 50);
    } finally {
      waitingForResponse.current = false;
      setWaitingForResponseUI(false);
      // Scroll to bottom to show the response
      scrollToBottom();
    }
  }, [notifyParent, saveToLocalStorage, selectedModel, scrollToBottom]);

  const handleClearChat = () => {
    if (confirm('Are you sure you want to clear this chat?')) {
      setMessages([]);
      localStorage.removeItem(storageKey);
      localStorage.removeItem(`${storageKey}-model`);
      localStorage.removeItem(`${storageKey}-last-update`);
      // Reset our tracking ref
      messagesRef.current = [];
      
      if (onChatHistoryChange) {
        onChatHistoryChange([]);
      }
    }
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {!compact && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Model Selection</h3>
            <div className="flex items-center gap-2">
              <ModelSelector 
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
                className="w-64"
              />
              <button 
                onClick={handleClearChat}
                className="px-3 py-2 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:underline"
              >
                Clear Chat
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Select the AI model that best suits your needs. Different models have different capabilities and response styles.
          </p>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-4">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              Start a New Conversation
            </h2>
            <p className="text-gray-500 max-w-md">
              Type a message to begin chatting with the AI assistant.
            </p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {waitingForResponseUI && (
              <div className="flex items-center gap-2 p-4 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Waiting for response...</span>
              </div>
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {compact && (
        <div className="p-2 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <ModelSelector 
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
              className="w-full max-w-[250px]"
            />
            {messages.length > 0 && (
              <button 
                onClick={handleClearChat}
                className="px-2 py-1 text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
      
      <ChatInput 
        onSendMessage={sendMessage} 
        disabled={isLoading || waitingForResponseUI}
        placeholder={waitingForResponseUI ? "AI is thinking..." : "Type a message..."}
      />
    </div>
  );
};

export default ChatContainer; 
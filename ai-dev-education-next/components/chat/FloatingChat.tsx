'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MessageCircle, X, MinusIcon } from 'lucide-react';
import ChatContainer from './ChatContainer';
import { Message } from '@/lib/openrouter';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  // Use refs to prevent unnecessary re-renders
  const updatePendingRef = useRef(false);
  const messagesRef = useRef<Message[]>([]);
  
  // The chatId is specific to the floating chat
  const chatId = 'floating-chat';
  
  // Load initial state from localStorage
  useEffect(() => {
    if (typeof window === 'undefined' || updatePendingRef.current) return;
    
    try {
      // Load open state
      const savedIsOpen = localStorage.getItem('ai-dev-education-floating-chat-open');
      if (savedIsOpen !== null) {
        setIsOpen(savedIsOpen === 'true');
      }
      
      // Load minimized state
      const savedIsMinimized = localStorage.getItem('ai-dev-education-floating-chat-minimized');
      if (savedIsMinimized !== null) {
        setIsMinimized(savedIsMinimized === 'true');
      }
      
      // Load messages to calculate unread count
      const savedMessages = localStorage.getItem(`ai-dev-education-chat-${chatId}`);
      if (savedMessages) {
        const messages = JSON.parse(savedMessages) as Message[];
        if (Array.isArray(messages)) {
          messagesRef.current = messages;
          
          // Calculate unread count (for demonstration - in a real app this would be more sophisticated)
          const lastSeenTime = localStorage.getItem('ai-dev-education-floating-chat-last-seen');
          if (lastSeenTime) {
            const lastSeenTimestamp = parseInt(lastSeenTime, 10);
            // Count messages that might be newer than last seen time
            setUnreadCount(messages.filter(m => m.role === 'assistant').length);
          }
        }
      }
    } catch (error) {
      console.error('Error loading floating chat state:', error);
    }
  }, []);
  
  // Save state changes to localStorage
  const saveStateToLocalStorage = useCallback((key: string, value: boolean) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(`ai-dev-education-floating-chat-${key}`, value.toString());
    } catch (error) {
      console.error(`Error saving ${key} state to localStorage:`, error);
    }
  }, []);
  
  // Toggle open state
  const toggleOpen = useCallback(() => {
    if (updatePendingRef.current) return;
    updatePendingRef.current = true;
    
    setIsOpen(prevOpen => {
      const newValue = !prevOpen;
      saveStateToLocalStorage('open', newValue);
      
      // If opening, reset unread count
      if (newValue) {
        setUnreadCount(0);
        localStorage.setItem('ai-dev-education-floating-chat-last-seen', Date.now().toString());
      }
      
      // Release update lock
      setTimeout(() => {
        updatePendingRef.current = false;
      }, 0);
      
      return newValue;
    });
  }, [saveStateToLocalStorage]);
  
  // Toggle minimized state
  const toggleMinimized = useCallback(() => {
    if (updatePendingRef.current) return;
    updatePendingRef.current = true;
    
    setIsMinimized(prevMinimized => {
      const newValue = !prevMinimized;
      saveStateToLocalStorage('minimized', newValue);
      
      // Release update lock
      setTimeout(() => {
        updatePendingRef.current = false;
      }, 0);
      
      return newValue;
    });
  }, [saveStateToLocalStorage]);
  
  // Handle chat history changes
  const handleChatHistoryChange = useCallback((messages: Message[]) => {
    messagesRef.current = messages;
    
    // Mark as unread only if chat is not open
    if (!isOpen) {
      setUnreadCount(prev => prev + 1);
    } else {
      // Update last seen time if open
      localStorage.setItem('ai-dev-education-floating-chat-last-seen', Date.now().toString());
    }
  }, [isOpen]);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* The Chat Window */}
      {isOpen && (
        <div 
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 w-96 transition-all duration-200 ease-in-out ${
            isMinimized ? 'h-14' : 'h-[480px]'
          }`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800">
            <h3 className="font-medium">AI Assistant</h3>
            <div className="flex space-x-2">
              <button 
                onClick={toggleMinimized}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <button 
                onClick={toggleOpen}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Chat Body - Only render if not minimized */}
          {!isMinimized && (
            <div className="h-[calc(480px-53px)]">
              <ChatContainer 
                chatId={chatId} 
                onChatHistoryChange={handleChatHistoryChange}
              />
            </div>
          )}
        </div>
      )}
      
      {/* The Toggle Button */}
      <button
        onClick={toggleOpen}
        className="relative p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
        aria-label={isOpen ? "Hide chat" : "Show chat"}
      >
        <MessageCircle className="w-6 h-6" />
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
} 
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUp, Paperclip } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({ 
  onSendMessage, 
  disabled = false, 
  placeholder = "Type a message..." 
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendingRef = useRef<boolean>(false);

  // Auto focus textarea when component mounts
  useEffect(() => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  }, [disabled]);

  // Auto resize textarea based on content
  const autoResizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    // Reset height to auto to correctly calculate the new height
    textarea.style.height = 'auto';
    
    // Set new height based on scrollHeight (capped at 200px)
    const newHeight = Math.min(textarea.scrollHeight, 200);
    textarea.style.height = `${newHeight}px`;
  }, []);

  // Apply auto-resize when message changes
  useEffect(() => {
    autoResizeTextarea();
  }, [message, autoResizeTextarea]);

  // Handle sending the message
  const handleSendMessage = useCallback(() => {
    if (message.trim() && !disabled && !sendingRef.current) {
      sendingRef.current = true;
      
      // Delay slightly to prevent double-sends
      setTimeout(() => {
        onSendMessage(message.trim());
        setMessage('');
        // Reset sending flag after a brief delay
        setTimeout(() => {
          sendingRef.current = false;
        }, 50);
      }, 0);
    }
  }, [message, onSendMessage, disabled]);

  // Handle key presses (Enter to send, Shift+Enter for new line)
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Handle changing message text
  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-end gap-2">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            rows={1}
            className="w-full p-3 pr-10 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
            style={{ minHeight: '44px', maxHeight: '200px' }}
          />
          <button
            type="button"
            className="absolute bottom-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            title="Attach file (coming soon)"
            disabled={true}
          >
            <Paperclip className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={handleSendMessage}
          disabled={!message.trim() || disabled}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Send message"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 
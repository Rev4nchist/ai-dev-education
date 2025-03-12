'use client';

import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export interface ChatMessageProps {
  message: {
    role: 'system' | 'user' | 'assistant';
    content: string;
  };
  className?: string;
}

const ChatMessage = ({ message, className }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={cn(
        'flex gap-3 p-4',
        isUser ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white dark:bg-slate-900',
        className
      )}
    >
      <div className="flex-shrink-0 mt-1">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User className="w-4 h-4" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
            <Bot className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm font-medium mb-1">
          {isUser ? 'You' : 'AI Assistant'}
        </p>
        
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown>
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 
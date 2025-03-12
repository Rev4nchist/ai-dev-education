'use client';

import React from 'react';
import { availableModels } from '@/lib/openrouter';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
  className?: string;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  onModelChange,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const selectedModelInfo = availableModels.find(model => model.id === selectedModel) || availableModels[0];
  
  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate">{selectedModelInfo.name}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-900 border rounded-md shadow-lg">
          <ul
            className="py-1 overflow-auto text-sm max-h-60"
            role="listbox"
            tabIndex={-1}
          >
            {availableModels.map((model) => (
              <li
                key={model.id}
                className={cn(
                  "cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800",
                  model.id === selectedModel ? "bg-blue-50 dark:bg-blue-900/20" : ""
                )}
                role="option"
                aria-selected={model.id === selectedModel}
                onClick={() => {
                  onModelChange(model.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{model.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{model.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelSelector; 
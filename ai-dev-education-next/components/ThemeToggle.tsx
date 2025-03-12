'use client';

import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={cn(
          'rounded-md p-2 focus:outline-none',
          theme === 'light' 
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
            : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        )}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
      </button>
      
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={cn(
          'rounded-md p-2 focus:outline-none',
          theme === 'dark' 
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
            : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        )}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </button>
      
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={cn(
          'rounded-md p-2 focus:outline-none',
          theme === 'system' 
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
            : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        )}
        aria-label="System preference"
      >
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  );
} 
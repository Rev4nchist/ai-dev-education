// OpenRouter API client for AI Dev Education chat functionality
import OpenAI from 'openai';

// Types for chat messages
export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatOptions {
  model?: string;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

// Define available models
export const availableModels = [
  {
    id: 'google/gemini-2.0-flash-thinking-exp:free',
    name: 'Gemini 2.0 flash thinking experimental',
    description: 'Fast, efficient model from Google with experimental thinking capabilities'
  },
  {
    id: 'anthropic/claude-3.7-sonnet:beta',
    name: 'Claude 3.7 Sonnet',
    description: 'Balanced performance for technical explanations and code generation'
  },
  {
    id: 'openai/gpt-4o-2024-11-20',
    name: 'GPT-4o',
    description: 'Latest OpenAI model with strong reasoning capabilities'
  },
  {
    id: 'deepseek/deepseek-r1:free',
    name: 'R1 by DeepSeek',
    description: 'Specialized model for coding and technical development tasks'
  }
];

// Create a singleton instance of the OpenRouter client
let openRouterClient: OpenAI | null = null;

export function getOpenRouterClient(): OpenAI {
  if (!openRouterClient) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY is not defined');
    }
    
    openRouterClient = new OpenAI({
      apiKey,
      baseURL: 'https://openrouter.ai/api/v1',
    });
  }
  
  return openRouterClient;
}

// Default system message for the chatbot
export const defaultSystemMessage: Message = {
  role: 'system',
  content: `You are a wizard-level assistant for the AI Dev Education website, which is focused on AI-assisted development and the Model Context Protocol (MCP).

Your primary goals:
1. Provide accurate, technical information about AI development tools (Cursor, Windsurf, Claude, OpenAI Agent SDK)
2. Be proactively helpful and anticpate user needs. 
3. Explain MCP concepts, implementation, and best practices
5. Guide users through learning paths based on their experience level
5. Answer coding questions related to AI integration

Tailor your responses based on user expertise:
- For beginners: Focus on clear explanations with examples
- For experienced developers: Provide technical details and implementation guidance
- For team leads/CTOs: Emphasize business value, integration strategies, and team workflows

Keep responses concise and focused on the question at hand. Use markdown for formatting code snippets and technical explanations.`
};

// Chat completion function
export async function createChatCompletion(
  messages: Message[],
  options: ChatOptions = {}
) {
  const client = getOpenRouterClient();
  
  const defaultOptions: ChatOptions = {
    model: process.env.DEFAULT_MODEL || 'google/gemini-2.0-flash-thinking-exp:free',
    temperature: 0.7,
    max_tokens: 1500,
    stream: false
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  try {
    if (mergedOptions.stream) {
      const stream = await client.chat.completions.create({
        model: mergedOptions.model!,
        messages,
        temperature: mergedOptions.temperature,
        max_tokens: mergedOptions.max_tokens,
        stream: true,
      });
      
      return stream;
    } else {
      const response = await client.chat.completions.create({
        model: mergedOptions.model!,
        messages,
        temperature: mergedOptions.temperature,
        max_tokens: mergedOptions.max_tokens,
      });
      
      return response;
    }
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    throw new Error('Failed to get response from AI model');
  }
} 
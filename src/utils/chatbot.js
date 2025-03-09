/**
 * AI-Assisted Development Educational Website
 * Chatbot integration with OpenRouter.ai
 */

// Import API key (this will be replaced with the actual key by the user)
import OPENROUTER_API_KEY from './openrouter_api_key.js';

class ChatbotService {
  constructor() {
    this.apiKey = OPENROUTER_API_KEY;
    this.apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  }

  async sendMessage(message, conversationHistory = []) {
    try {
      // Add user message to history
      conversationHistory.push({
        role: 'user',
        content: message
      });

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-4-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant for an educational website about AI-assisted development and Model Context Protocol (MCP). Provide concise, accurate information about AI tools like Codeium and Cursor, MCP integration, and best practices. Tailor your responses to be technical for developers and strategic for executives.'
            },
            ...conversationHistory
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      // Add bot response to history
      conversationHistory.push({
        role: 'assistant',
        content: botReply
      });

      return {
        reply: botReply,
        updatedHistory: conversationHistory
      };
    } catch (error) {
      console.error('Error communicating with OpenRouter API:', error);
      return {
        reply: "I'm having trouble connecting to my knowledge base right now. Please try again later.",
        updatedHistory: conversationHistory
      };
    }
  }
}

export default ChatbotService;

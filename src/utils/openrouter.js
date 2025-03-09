// OpenRouter.ai API Integration for Chatbot
// This file is included in .gitignore to prevent exposing API keys

// Replace this with your actual OpenRouter API key
const OPENROUTER_API_KEY = "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";

// OpenRouter API endpoint
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

// Available models - you can change this based on your preference
const DEFAULT_MODEL = "openai/gpt-4-turbo";

// Function to send a message to the OpenRouter API
async function sendMessageToOpenRouter(message, conversationHistory = []) {
  try {
    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: message
    });

    // Prepare the request to OpenRouter
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': window.location.origin, // Required for OpenRouter
        'X-Title': 'AI-Dev Education Chatbot' // Optional but helpful for tracking
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant for an educational website about AI-assisted development and Model Context Protocol (MCP). Provide concise, accurate information about AI tools like Codeium and Cursor, MCP integration, building MCP servers, and best practices. Tailor your responses to be technical for developers and strategic for executives. Keep responses under 150 words unless the user specifically asks for more detail.'
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

// Export the function for use in the main.js file
export { sendMessageToOpenRouter };

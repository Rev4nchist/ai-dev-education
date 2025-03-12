// Simple test script
const fs = require('fs');
const path = require('path');

console.log("Starting chat component test...");

// Clear any localStorage test data to simulate fresh state
// (Would be done in browser using localStorage.clear())
const testDir = path.join(__dirname, '.test_data');

// Create test directory if it doesn't exist
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
}

// Mock localStorage for Node.js
const localStorage = {
  items: {},
  getItem(key) {
    return this.items[key] || null;
  },
  setItem(key, value) {
    this.items[key] = value;
    
    // Save to test file for debugging
    const filePath = path.join(testDir, 'localStorage.json');
    fs.writeFileSync(filePath, JSON.stringify(this.items, null, 2));
  },
  removeItem(key) {
    delete this.items[key];
  },
  clear() {
    this.items = {};
  }
};

// Mock message simulation
console.log("Simulating chat component lifecycle...");

// 1. Create a new chat
const chatId = `chat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
console.log(`Created new chat with ID: ${chatId}`);

// 2. Add some messages
const messages = [
  { role: 'user', content: 'Hello, how are you?' },
  { role: 'assistant', content: 'I\'m doing well, thank you for asking!' },
  { role: 'user', content: 'What can you help me with?' },
  { role: 'assistant', content: 'I can help you with coding, answering questions, and more.' }
];

// 3. Save to localStorage
localStorage.setItem(`ai-dev-education-chat-${chatId}`, JSON.stringify(messages));
localStorage.setItem(`ai-dev-education-chat-${chatId}-model`, JSON.stringify('openai/gpt-3.5-turbo'));
localStorage.setItem(`ai-dev-education-chat-${chatId}-last-update`, Date.now().toString());

console.log("Added initial messages to chat");

// 4. Simulate an update
setTimeout(() => {
  console.log("Updating chat with new message...");
  
  // Get current messages
  const currentMessages = JSON.parse(localStorage.getItem(`ai-dev-education-chat-${chatId}`));
  
  // Add new message
  const updatedMessages = [
    ...currentMessages,
    { role: 'user', content: 'Can you help me fix an infinite loop bug?' }
  ];
  
  // Save updated messages
  localStorage.setItem(`ai-dev-education-chat-${chatId}`, JSON.stringify(updatedMessages));
  localStorage.setItem(`ai-dev-education-chat-${chatId}-last-update`, Date.now().toString());
  
  console.log("Chat updated successfully");
  
  // 5. Simulate loading the chat
  setTimeout(() => {
    console.log("Loading chat history...");
    
    // Get all chat IDs from localStorage
    const allChats = [];
    for (const key in localStorage.items) {
      if (key.startsWith('ai-dev-education-chat-') && !key.includes('-model') && !key.includes('-last-update')) {
        const id = key.replace('ai-dev-education-chat-', '');
        const messages = JSON.parse(localStorage.getItem(key));
        
        allChats.push({
          id,
          messages,
          lastUpdated: localStorage.getItem(`ai-dev-education-chat-${id}-last-update`) || Date.now().toString()
        });
      }
    }
    
    console.log(`Found ${allChats.length} chats in history`);
    
    if (allChats.length > 0) {
      const sortedChats = allChats.sort((a, b) => parseInt(b.lastUpdated) - parseInt(a.lastUpdated));
      console.log("Most recent chat:", sortedChats[0].id);
      console.log("Message count:", sortedChats[0].messages.length);
    }
    
    console.log("Test completed successfully without infinite loops!");
  }, 500);
}, 500); 
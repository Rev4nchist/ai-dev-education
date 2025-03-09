/**
 * AI-Assisted Development Educational Website
 * Main JavaScript file
 */

// Import the OpenRouter chatbot service
// Note: This import will work when properly bundled. For direct use, you may need to adjust based on your setup.
import { sendMessageToOpenRouter } from './openrouter.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot
    initChatbot();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Insert before nav
        header.querySelector('.header-container').insertBefore(mobileMenuBtn, nav);
        
        // Add toggle functionality
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    };
    
    // Only create mobile nav for smaller screens
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileNav();
            }
        }
    });
    
    // Add search functionality
    setupSearch();
});

// Search functionality
function setupSearch() {
    // Create search button in header
    const header = document.querySelector('.header-container');
    const searchButton = document.createElement('div');
    searchButton.className = 'search-button';
    searchButton.innerHTML = '<i class="fas fa-search"></i>';
    header.appendChild(searchButton);
    
    // Create search modal
    const searchModal = document.createElement('div');
    searchModal.className = 'search-modal';
    searchModal.innerHTML = `
        <div class="search-container">
            <input type="text" placeholder="Search the site...">
            <button class="close-search"><i class="fas fa-times"></i></button>
        </div>
        <div class="search-results"></div>
    `;
    document.body.appendChild(searchModal);
    
    // Add styles for search
    const style = document.createElement('style');
    style.textContent = `
        .search-button {
            margin-left: 1rem;
            cursor: pointer;
            color: var(--primary-blue);
            font-size: 1.2rem;
        }
        
        .search-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            display: none;
            justify-content: center;
            padding-top: 100px;
        }
        
        .search-modal.active {
            display: block;
        }
        
        .search-container {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            position: relative;
        }
        
        .search-container input {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
        }
        
        .close-search {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--gray-text);
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        .search-results {
            width: 80%;
            max-width: 600px;
            margin: 1rem auto;
            background-color: white;
            border-radius: 5px;
            max-height: 60vh;
            overflow-y: auto;
            padding: 1rem;
        }
        
        .search-result-item {
            padding: 1rem;
            border-bottom: 1px solid #eee;
        }
        
        .search-result-item:last-child {
            border-bottom: none;
        }
        
        .search-result-item a {
            color: var(--primary-blue);
            font-weight: 600;
        }
        
        .search-result-item p {
            margin: 0.5rem 0 0;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
    
    // Toggle search modal
    searchButton.addEventListener('click', function() {
        searchModal.classList.add('active');
        searchModal.querySelector('input').focus();
    });
    
    // Close search modal
    searchModal.querySelector('.close-search').addEventListener('click', function() {
        searchModal.classList.remove('active');
    });
    
    // Close search modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });
    
    // Handle search input
    const searchInput = searchModal.querySelector('input');
    const searchResults = searchModal.querySelector('.search-results');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (query.length < 3) {
            searchResults.innerHTML = '<p>Please enter at least 3 characters to search</p>';
            return;
        }
        
        // Simple search implementation - in a real site, this would be more sophisticated
        const pages = [
            { title: 'AI-Assisted Development', url: '../introduction/index.html', content: 'Learn about tools like Codeium and Cursor, showcasing AI\'s role in modern coding.' },
            { title: 'Understanding MCP', url: '../understanding-mcp/index.html', content: 'Explore the Model Context Protocol, the open standard powering AI tool integration.' },
            { title: 'Integrating MCP with Development Tools', url: '../integrating-mcp/index.html', content: 'Step-by-step guides for integrating Model Context Protocol with Windsurf and Cursor.' },
            { title: 'Building MCP Servers', url: '../building-mcp-servers/index.html', content: 'Learn how to create your own Model Context Protocol server using TypeScript.' },
            { title: 'Best Practices and Use Cases', url: '../best-practices/index.html', content: 'Guidelines for leveraging AI effectively in development with real-world success stories.' }
        ];
        
        const results = pages.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.content.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item">
                    <a href="${result.url}">${result.title}</a>
                    <p>${result.content}</p>
                </div>
            `).join('');
        }
    });
}

// Chatbot functionality
function initChatbot() {
    const chatbotButton = document.querySelector('.chatbot-button');
    
    if (!chatbotButton) return;
    
    // Create chatbot interface
    const chatbotInterface = document.createElement('div');
    chatbotInterface.className = 'chatbot-interface';
    chatbotInterface.innerHTML = `
        <div class="chatbot-header">
            <h4>AI Assistant</h4>
            <span class="close-chatbot"><i class="fas fa-times"></i></span>
        </div>
        <div class="chatbot-messages">
            <div class="message bot">
                <p>Hello! I'm your AI assistant. How can I help you with AI-assisted development or MCP today?</p>
            </div>
        </div>
        <div class="chatbot-input">
            <input type="text" placeholder="Type your question here...">
            <button><i class="fas fa-paper-plane"></i></button>
        </div>
        <div class="chatbot-typing" style="display: none;">
            <p><i class="fas fa-circle-notch fa-spin"></i> AI is thinking...</p>
        </div>
    `;
    
    // Add styles for chatbot
    const style = document.createElement('style');
    style.textContent = `
        .chatbot-interface {
            position: fixed;
            bottom: 5rem;
            right: 2rem;
            width: 350px;
            height: 450px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 1000;
            display: none;
        }
        
        .chatbot-interface.active {
            display: flex;
        }
        
        .chatbot-header {
            background: linear-gradient(90deg, var(--primary-orange), var(--primary-purple));
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chatbot-header h4 {
            margin: 0;
        }
        
        .close-chatbot {
            cursor: pointer;
        }
        
        .chatbot-messages {
            flex: 1;
            padding: 1rem;
            overflow-y: auto;
        }
        
        .message {
            margin-bottom: 1rem;
            padding: 0.8rem;
            border-radius: 10px;
            max-width: 80%;
        }
        
        .message.user {
            background-color: var(--primary-blue);
            color: white;
            margin-left: auto;
        }
        
        .message.bot {
            background-color: #f1f1f1;
        }
        
        .chatbot-input {
            display: flex;
            padding: 1rem;
            border-top: 1px solid #eee;
        }
        
        .chatbot-input input {
            flex: 1;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
        }
        
        .chatbot-input button {
            background: linear-gradient(90deg, var(--primary-orange), var(--primary-purple));
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-left: 0.5rem;
            cursor: pointer;
        }
        
        .chatbot-typing {
            padding: 0.5rem 1rem;
            color: var(--gray-text);
            font-size: 0.9rem;
            border-top: 1px solid #eee;
        }
        
        .chatbot-typing p {
            margin: 0;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(chatbotInterface);
    
    // Toggle chatbot visibility
    chatbotButton.addEventListener('click', function() {
        chatbotInterface.classList.toggle('active');
    });
    
    // Close chatbot
    document.querySelector('.close-chatbot').addEventListener('click', function() {
        chatbotInterface.classList.remove('active');
    });
    
    // Handle sending messages
    const messageInput = chatbotInterface.querySelector('input');
    const sendButton = chatbotInterface.querySelector('button');
    const messagesContainer = chatbotInterface.querySelector('.chatbot-messages');
    const typingIndicator = chatbotInterface.querySelector('.chatbot-typing');
    
    // Store conversation history
    let conversationHistory = [];
    
    async function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'message user';
        userMessageElement.innerHTML = `<p>${message}</p>`;
        messagesContainer.appendChild(userMessageElement);
        
        // Clear input
        messageInput.value = '';
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Show typing indicator
        typingIndicator.style.display = 'block';
        
        try {
            // Check if OpenRouter integration is available
            if (typeof sendMessageToOpenRouter === 'function') {
                // Send message to OpenRouter
                const response = await sendMessageToOpenRouter(message, conversationHistory);
                
                // Update conversation history
                conversationHistory = response.updatedHistory;
                
                // Add bot response to chat
                const botMessageElement = document.createElement('div');
                botMessageElement.className = 'message bot';
                botMessageElement.innerHTML = `<p>${response.reply}</p>`;
                messagesContainer.appendChild(botMessageElement);
            } else {
                // Fallback if OpenRouter integration is not available
                setTimeout(() => {
                    const botMessageElement = document.createElement('div');
                    botMessageElement.className = 'message bot';
                    botMessageElement.innerHTML = `<p>OpenRouter integration is not available. Please add your API key to the openrouter.js file.</p>`;
                    messagesContainer.appendChild(botMessageElement);
                }, 1000);
            }
        } catch (error) {
            console.error('Error in chatbot:', error);
            
            // Show error message
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot';
            botMessageElement.innerHTML = `<p>I'm having trouble connecting to my knowledge base right now. Please try again later.</p>`;
            messagesContainer.appendChild(botMessageElement);
        } finally {
            // Hide typing indicator
            typingIndicator.style.display = 'none';
            
            // Scroll to bottom again
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

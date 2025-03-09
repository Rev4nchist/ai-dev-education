# AI-Dev Education Website - Developer Documentation

This document provides technical documentation for developers who will be working with or extending the AI-Dev Education website.

## Technology Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Custom styling with CSS variables for theming
- **JavaScript (ES6+)**: Modular JavaScript with ES6 features
- **OpenRouter.ai API**: Powers the AI chatbot functionality

## Project Structure

```
ai-dev-education/
├── src/                      # Source files
│   ├── assets/               # Static assets
│   │   └── images/           # Image files
│   ├── components/           # Reusable components (for future expansion)
│   ├── pages/                # Individual page content
│   │   ├── introduction/     # Introduction to AI-Assisted Development
│   │   ├── understanding-mcp/ # Understanding MCP
│   │   ├── integrating-mcp/  # Integrating MCP with Development Tools
│   │   ├── building-mcp-servers/ # Building MCP Servers
│   │   └── best-practices/   # Best Practices and Use Cases
│   ├── styles/               # CSS files
│   │   ├── main.css          # Main stylesheet (development)
│   │   └── main.min.css      # Minified stylesheet (production)
│   ├── utils/                # JavaScript utilities
│   │   ├── main.js           # Main JavaScript file (development)
│   │   ├── main.min.js       # Minified JavaScript (production)
│   │   ├── openrouter.js     # OpenRouter.ai API integration
│   │   └── chatbot.js        # Chatbot functionality
│   └── index.html            # Main entry point (development)
│   └── index.optimized.html  # Optimized entry point (production)
├── .gitignore                # Git ignore file
├── README.md                 # Project overview
├── DEVELOPER.md              # This file
└── todo.md                   # Development task list
```

## CSS Architecture

The website uses a custom CSS architecture with CSS variables for theming. The main color scheme is orangey-blue-purple on a light background.

### CSS Variables

```css
:root {
  /* Color Palette */
  --primary-orange: #FF7D00;
  --secondary-orange: #FF9E2C;
  --primary-blue: #4361EE;
  --secondary-blue: #4CC9F0;
  --primary-purple: #7209B7;
  --secondary-purple: #B5179E;
  --light-bg: #F8F9FA;
  --white: #FFFFFF;
  --dark-text: #212529;
  --light-text: #F8F9FA;
  --gray-text: #6C757D;
  
  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Responsive Design

The website is fully responsive with breakpoints at:
- 768px (tablets)
- 576px (mobile devices)

## JavaScript Architecture

### Module Structure

The JavaScript is organized into modular components:

- **main.js**: Core functionality and initialization
- **openrouter.js**: OpenRouter.ai API integration
- **chatbot.js**: Chatbot UI and interaction logic

### OpenRouter.ai Integration

The chatbot is powered by OpenRouter.ai. To enable it:

1. Get an API key from [OpenRouter.ai](https://openrouter.ai/)
2. Add your API key to `src/utils/openrouter.js`

```javascript
// Example configuration
const OPENROUTER_API_KEY = "your-api-key-here";
```

### Search Functionality

The search functionality is implemented in JavaScript and searches across all website content. It's triggered by the search button in the header.

## Performance Optimization

### Minification

For production use, the site includes minified CSS and JavaScript files:
- `src/styles/main.min.css`
- `src/utils/main.min.js`
- `src/index.optimized.html` (references the minified resources)

### Best Practices

- CSS is loaded in the head to prevent FOUC (Flash of Unstyled Content)
- JavaScript is loaded at the end of the body to prevent render blocking
- External resources use CDNs with appropriate caching

## Extending the Website

### Adding New Pages

To add a new page:

1. Create a new directory in `src/pages/`
2. Add an `index.html` file with the page content
3. Update navigation links in all pages
4. Add the page to the search index in `main.js`

### Modifying the Chatbot

To modify the chatbot behavior:

1. Edit the system prompt in `openrouter.js`
2. Adjust the UI in the `initChatbot()` function in `main.js`

### Updating Styles

To update the website styling:

1. Modify the CSS variables in `src/styles/main.css`
2. Run minification to update `main.min.css`

## Deployment

### GitHub Pages

The website can be deployed to GitHub Pages:

1. Push the repository to GitHub
2. Enable GitHub Pages in the repository settings
3. Set the source to the `main` branch and the `/src` directory

### Custom Domain

To use a custom domain:

1. Add a CNAME file to the `src` directory with your domain
2. Update your domain's DNS settings to point to GitHub Pages

## Troubleshooting

### Common Issues

- **Chatbot not working**: Verify that the OpenRouter API key is correctly set in `openrouter.js`
- **Styles not applying**: Check for CSS syntax errors or missing variables
- **Search not finding content**: Ensure the page is added to the search index in `main.js`

## Future Enhancements

Potential areas for future development:

1. **Server-side rendering**: Improve SEO and performance
2. **Content management system**: Allow non-technical users to update content
3. **Analytics integration**: Track user engagement and popular content
4. **Expanded chatbot capabilities**: Add more specialized knowledge and features
5. **Interactive tutorials**: Add hands-on exercises for learning MCP

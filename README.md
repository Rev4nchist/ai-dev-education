# AI-Assisted Development Educational Website

An educational website about AI-assisted development and the Model Context Protocol (MCP), designed for developers, engineering teams, and C-level executives at enterprise software companies.

## Overview

This website serves as a simple, open resource to educate users about AI-assisted development and MCP. It's accessible to all without logins or complex features, focusing on clarity and engagement.

## Features

- **Comprehensive Content**: Five focused sections covering AI-assisted development and MCP
- **Interactive Chatbot**: Powered by OpenRouter.ai to answer technical questions
- **Responsive Design**: Works seamlessly on all devices
- **Search Functionality**: Easily find content across the site
- **Modern UI**: Engaging orangey-blue-purple color scheme on a light background

## Content Structure

1. **Introduction to AI-Assisted Development**  
   - What AI-assisted development is and why it matters
   - Leading AI development tools (Codeium and Cursor)
   - Comparison with traditional development

2. **Understanding MCP**  
   - The basics of Model Context Protocol
   - How MCP works and its architecture
   - Strategic value for executives

3. **Integrating MCP with Development Tools**  
   - Step-by-step integration guides for Windsurf and Cursor
   - Comparison of different integration approaches
   - Common challenges and solutions

4. **Building MCP Servers**  
   - Tutorial for creating an MCP server with TypeScript
   - Advanced features and best practices
   - Deployment options

5. **Best Practices and Use Cases**  
   - Guidelines for leveraging AI effectively
   - Real-world success stories
   - Implementation checklist

## Getting Started

1. Clone this repository
2. Open `src/index.html` in your browser to view the site locally
3. Add your OpenRouter API key to `src/utils/openrouter.js` to enable the chatbot

## Development

### Project Structure

```
ai-dev-education/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── pages/
│   │   ├── introduction/
│   │   ├── understanding-mcp/
│   │   ├── integrating-mcp/
│   │   ├── building-mcp-servers/
│   │   └── best-practices/
│   ├── styles/
│   │   ├── main.css
│   │   └── main.min.css
│   ├── utils/
│   │   ├── main.js
│   │   ├── main.min.js
│   │   ├── openrouter.js
│   │   └── chatbot.js
│   └── index.html
├── .gitignore
├── README.md
└── todo.md
```

### Performance Optimization

For production use, the site includes minified CSS and JavaScript files:
- `src/styles/main.min.css`
- `src/utils/main.min.js`
- `src/index.optimized.html` (references the minified resources)

## Customization

### Chatbot Integration

The website includes a chatbot powered by OpenRouter.ai. To enable it:

1. Get an API key from [OpenRouter.ai](https://openrouter.ai/)
2. Add your API key to `src/utils/openrouter.js`

### Styling

The website uses a custom color scheme with orangey-blue-purple gradients on a light background. You can customize the colors by modifying the CSS variables in `src/styles/main.css`.

## License

[MIT License](LICENSE)

## Acknowledgements

This website was created based on documentation from:
- [Codeium Overview](https://docs.codeium.com/getstarted/overview)
- [Windsurf MCP Integration](https://docs.codeium.com/windsurf/mcp)
- [AI Hero MCP Server](https://www.aihero.dev/mcp-server-from-a-single-typescript-file)
- [Cursor Welcome](https://docs.cursor.com/get-started/welcome)
- [Cursor Rules for AI](https://docs.cursor.com/context/rules-for-ai)
- [Cursor MCP](https://docs.cursor.com/context/model-context-protocol)

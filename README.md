# AI-Assisted Development Educational Website

An educational website about AI-assisted development and the Model Context Protocol (MCP), designed for developers, engineering teams, and C-level executives at enterprise software companies.

## Overview

This website serves as a simple, open resource to educate users about AI-assisted development and MCP. It's accessible to all without logins or complex features, focusing on clarity and engagement.

## Features

- **Comprehensive Content**: Five focused sections covering AI-assisted development and MCP
- **Modern UI Components**: Engaging hero sections, feature cards, and animations
- **Responsive Design**: Works seamlessly on all devices (mobile, tablet, and desktop)
- **Accessibility Features**: Skip links, keyboard navigation, and ARIA attributes
- **Interactive Elements**: Tabbed interfaces, scroll animations, and hover effects
- **Chatbot Integration**: Powered by OpenRouter.ai to answer technical questions (coming soon)

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
2. Install dependencies: `npm install`
3. Start the Express server: `npm run start:express`
4. Visit `http://localhost:3000` in your browser

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
│   │   ├── layout-improvements.css
│   │   └── modern-components.css
│   ├── utils/
│   │   ├── main.js
│   │   ├── chatbot.js
│   │   └── scroll-animations.js
│   └── index.html
├── tests/
│   ├── unit/
│   ├── puppeteer/
│   ├── improvement-check/
│   ├── content-analysis/
│   └── layout-analysis/
├── server.js
├── package.json
├── jest.config.js
├── .eslintrc.js
├── project_rules/
├── .gitignore
└── README.md
```

### Running the Project

The project can be run in two ways:

1. **Express Server** (Recommended):
   ```
   npm run start:express
   ```
   This starts an Express server on port 3000 and serves the files from the `src` directory.

2. **Live Server** (Development):
   ```
   npm run start:dev
   ```
   This starts a live-server instance with hot reloading for development.

### Testing

The project uses Jest for unit testing and Puppeteer for UI testing:

```
npm test
```

To run specific test files:

```
npm test -- tests/unit/content-structure.test.js
```

### UI Components

The website features modern UI components:

- **Hero Sections**: Gradient backgrounds with animations and badges
- **Feature Cards**: Interactive cards with icons and hover effects
- **Tabbed Interfaces**: Clean, accessible tab navigation
- **Scroll Animations**: Elements animate as they enter the viewport
- **Responsive Layouts**: Optimized for mobile, tablet, and desktop

### Accessibility Features

The website includes several accessibility enhancements:

- Skip-to-content links for keyboard navigation
- Enhanced focus styles for interactive elements
- Proper heading hierarchy and semantic HTML
- ARIA attributes for interactive components
- Sufficient color contrast for readability

## Customization

### Styling

The website uses three main CSS files:

1. `main.css`: Base styles and variables
2. `layout-improvements.css`: Spacing, structure, and responsive layouts
3. `modern-components.css`: UI components and animations

You can customize the colors by modifying the CSS variables in `src/styles/main.css`.

### Animation

Scroll animations are controlled by `src/utils/scroll-animations.js`. You can:

- Add the `scroll-fade-in`, `scroll-fade-in-left`, `scroll-fade-in-right`, or `scroll-scale-in` classes to elements
- Use delay classes (`delay-100` through `delay-500`) to stagger animations
- Call the `applyScrollAnimations()` function for dynamically loaded content

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

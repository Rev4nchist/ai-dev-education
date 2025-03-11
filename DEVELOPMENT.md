# AI Dev Education Development Guide

This document provides instructions for setting up and working with the AI Dev Education project.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rev4nchist/ai-dev-education.git
   cd ai-dev-education
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   This will start a local development server at http://localhost:8080 and open the site in your default browser.

## Development Workflow

### Running Tests

We follow a test-driven development (TDD) approach. Always write tests before implementing features.

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Linting

We use ESLint to enforce coding standards.

```bash
# Lint all files
npm run lint

# Automatically fix linting issues where possible
npm run lint -- --fix
```

### Directory Structure

```
ai-dev-education/
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── pages/            # Page content
│   ├── styles/           # CSS files
│   └── utils/            # JavaScript utilities
├── tests/                # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── mocks/            # Test mocks
├── .eslintrc.js          # ESLint configuration
├── jest.config.js        # Jest configuration
├── live-server.json      # Live Server configuration
└── package.json          # Project dependencies and scripts
```

## Coding Standards

Please follow these guidelines when contributing to the project:

### HTML

- Use semantic HTML elements
- Include appropriate ARIA attributes for accessibility
- Validate HTML using W3C Validator

### CSS

- Follow the established color scheme and typography
- Use CSS variables for consistency
- Write mobile-first responsive styles

### JavaScript

- Follow ESLint rules
- Write tests for all new functionality
- Use ES6+ features where appropriate
- Document complex functions with JSDoc comments

## Pull Request Process

1. Create a feature branch from `main`
2. Write tests for your changes
3. Implement your changes
4. Ensure all tests pass
5. Submit a pull request with a clear description of the changes

## Troubleshooting

### Common Issues

- **Tests failing**: Make sure you have the latest dependencies with `npm install`
- **Live server not working**: Check if port 8080 is already in use
- **ESLint errors**: Run `npm run lint -- --fix` to automatically fix issues

### Getting Help

If you encounter any issues not covered here, please:

1. Check existing GitHub issues
2. Create a new issue with detailed information about the problem
3. Include steps to reproduce, expected behavior, and actual behavior 
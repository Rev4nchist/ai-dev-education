# AI Dev Education Coding Standards

## HTML Standards

### Structure and Organization
- Use HTML5 doctype: `<!DOCTYPE html>`
- Include appropriate meta tags (charset, viewport, description)
- Organize content with semantic HTML elements (header, main, section, article, footer)
- Use proper heading hierarchy (h1-h6) that follows logical document structure
- Include descriptive `title` elements that reflect page content

### Accessibility
- Add appropriate ARIA attributes when necessary
- Ensure all images have descriptive `alt` text
- Maintain proper focus order for keyboard navigation
- Use appropriate semantic elements for interactive components
- Ensure color contrast meets WCAG AA standards (minimum 4.5:1 for normal text)
- Include skip navigation links for keyboard users

### Best Practices
- Validate HTML using W3C Validator
- Use lowercase for element names and attributes
- Quote all attribute values using double quotes
- Close all elements properly
- Use proper indentation (2 spaces) for nested elements
- Place JavaScript at the end of the body when possible

## CSS Standards

### Organization
- Follow existing structure in main.css
- Group related styles together
- Use the established CSS variables for colors and typography
- Keep selectors as simple as possible
- Comment major sections and complex rules

### Naming Conventions
- Use descriptive class names that reflect purpose
- Follow kebab-case naming convention (e.g., `.main-header`, `.card-title`)
- Avoid excessive nesting of selectors (max 3 levels)
- Prefix utility classes with `u-` (e.g., `u-hidden`, `u-flex`)

### Responsive Design
- Use mobile-first approach for media queries
- Target standard breakpoints:
  - Mobile: Base styles (< 768px)
  - Tablet: `@media (min-width: 768px)`
  - Desktop: `@media (min-width: 1024px)`
  - Large desktop: `@media (min-width: 1280px)`
- Test on multiple viewport sizes

### Best Practices
- Avoid `!important` declarations unless absolutely necessary
- Use CSS variables for repeated values
- Keep file size optimized by avoiding redundant rules
- Ensure all styles are properly scoped to avoid conflicts
- Minimize the use of absolute positioning

## JavaScript Standards

### Syntax and Formatting
- Follow ES6+ standards
- Use `const` and `let` instead of `var`
- Use arrow functions when appropriate
- Format with consistent indentation (2 spaces)
- Add semicolons at the end of statements
- Keep lines under 80 characters when possible

### Code Organization
- Use descriptive function and variable names
- Add comments for complex logic
- Use camelCase for variable and function names
- Group related functions together
- Initialize variables at the top of their scope

### DOM Manipulation
- Cache DOM references when using them multiple times
- Use event delegation for multiple similar elements
- Prefer `classList` over direct style manipulation
- Avoid excessive reflows and repaints
- Use template literals for complex string concatenation

### Performance
- Debounce scroll and resize event handlers
- Minimize DOM manipulation
- Avoid blocking the main thread with heavy calculations
- Use asynchronous operations for network requests
- Defer non-critical JavaScript loading

### Error Handling
- Include proper error handling for asynchronous operations
- Log meaningful error messages
- Provide fallbacks for critical functionality
- Validate user input appropriately

## Project-Specific Standards

### File Organization
- Keep HTML files in their respective page directories
- Place all CSS files in the src/styles directory
- Store JavaScript utilities in the src/utils directory
- Organize images in the src/images directory
- Name files consistently and descriptively

### Chatbot Integration
- Follow the established pattern in chatbot.js
- Keep API keys in separate configuration files
- Implement proper error handling for API requests
- Provide fallback UI states for failed requests

### Build Process
- Minify CSS and JavaScript for production
- Optimize images before committing to the repository
- Use source maps for debugging minified code
- Document build steps in comments or README

### Documentation
- Include JSDoc comments for JavaScript functions
- Document CSS sections with block comments
- Add inline comments for complex logic
- Update README with new features or significant changes

## Version Control Practices

### Commit Guidelines
- Write clear, descriptive commit messages
- Use present tense for commit messages
- Reference related issues or tasks when applicable
- Keep commits focused on a single change or feature

### Branch Strategy
- Use feature branches for new development
- Name branches descriptively (e.g., `feature/add-search`, `fix/responsive-nav`)
- Merge only after testing and code review
- Keep main/master branch stable and deployable

By following these coding standards, we ensure consistency, maintainability, and quality across the AI Dev Education website project. 
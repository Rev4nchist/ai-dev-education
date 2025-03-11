/**
 * Jest setup file for AI Dev Education project
 * This file runs before each test to set up the testing environment
 */

// Import jest-dom for additional DOM matchers
require('@testing-library/jest-dom');

// Set up global variables that might be needed in tests
global.testHelpers = {
  // Add any helper functions or test data here
  sampleData: {
    // Sample data for tests
  }
};

// Mock browser APIs that might not be available in jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Console error override to make test failures more visible
const originalConsoleError = console.error;
console.error = (...args) => {
  // Check if this is a React error
  if (args[0] && args[0].includes && args[0].includes('Warning:')) {
    // Convert React warnings to errors for stricter testing
    throw new Error(args[0]);
  }
  originalConsoleError(...args);
}; 
/**
 * Jest configuration for AI Dev Education project
 * This file configures Jest to work with our HTML/CSS/JS project
 */

module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  
  // Setup files to run before each test
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // File patterns to look for tests
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Mock CSS and other static assets
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/mocks/fileMock.js'
  },
  
  // Collect test coverage information
  collectCoverage: true,
  
  // Directory where Jest should output coverage files
  coverageDirectory: 'coverage',
  
  // Files to include in coverage reports
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  
  // Verbose output
  verbose: true
}; 
/**
 * ESLint configuration for AI Dev Education project
 * This file configures ESLint to enforce our coding standards
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'jest'
  ],
  rules: {
    // Error prevention
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    
    // Style consistency
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    
    // Best practices
    'eqeqeq': ['error', 'always'],
    'curly': ['warn', 'multi-line'],
    'camelcase': 'warn',
    
    // Jest specific rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  overrides: [
    {
      // Allow certain globals in test files
      files: ['tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true
      },
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}; 
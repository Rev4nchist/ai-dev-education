/**
 * Tests for verifying the development environment setup
 */

const fs = require('fs');
const path = require('path');

describe('Development Environment', () => {
  test('ESLint configuration exists', () => {
    const eslintConfigPath = path.resolve('.eslintrc.js');
    expect(fs.existsSync(eslintConfigPath)).toBe(true);
    
    // Verify it's a valid module
    const eslintConfig = require('../../.eslintrc.js');
    expect(eslintConfig).toHaveProperty('rules');
    expect(eslintConfig).toHaveProperty('env');
  });
  
  test('Package.json has correct scripts', () => {
    const packageJsonPath = path.resolve('package.json');
    expect(fs.existsSync(packageJsonPath)).toBe(true);
    
    const packageJson = require('../../package.json');
    expect(packageJson.scripts).toHaveProperty('test');
    expect(packageJson.scripts).toHaveProperty('lint');
    expect(packageJson.scripts).toHaveProperty('start');
  });
  
  test('Live server configuration exists', () => {
    const liveServerConfigPath = path.resolve('live-server.json');
    expect(fs.existsSync(liveServerConfigPath)).toBe(true);
    
    // Read and parse the file to verify it's valid JSON
    const liveServerConfig = JSON.parse(fs.readFileSync(liveServerConfigPath, 'utf8'));
    expect(liveServerConfig).toHaveProperty('port');
    expect(liveServerConfig).toHaveProperty('host');
  });
}); 
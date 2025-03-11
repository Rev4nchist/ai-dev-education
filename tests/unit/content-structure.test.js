/**
 * Tests for validating the content structure of the website
 */

const fs = require('fs');
const path = require('path');

// Add TextEncoder and TextDecoder polyfills for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');

// Helper function to load HTML file
function loadHtmlFile(filePath) {
  const fullPath = path.resolve(filePath);
  const html = fs.readFileSync(fullPath, 'utf8');
  return new JSDOM(html);
}

describe('Main Navigation Structure', () => {
  let dom;
  let document;
  
  beforeAll(() => {
    dom = loadHtmlFile('src/index.html');
    document = dom.window.document;
  });
  
  test('Navigation contains links to all five sections', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    expect(navLinks.length).toBeGreaterThanOrEqual(5);
    
    const expectedLinks = [
      'introduction',
      'understanding-mcp',
      'integrating-mcp',
      'building-mcp-servers',
      'best-practices'
    ];
    
    const foundLinks = Array.from(navLinks).map(link => link.getAttribute('href'));
    
    expectedLinks.forEach(expectedLink => {
      const linkFound = foundLinks.some(foundLink => 
        foundLink.includes(expectedLink)
      );
      expect(linkFound).toBe(true);
    });
  });
  
  test('Navigation links point to correct pages', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    Array.from(navLinks).forEach(link => {
      const href = link.getAttribute('href');
      expect(href).toBeTruthy();
      
      // Check if the linked file exists
      const linkedFile = path.resolve(path.join('src', href));
      expect(fs.existsSync(linkedFile)).toBe(true);
    });
  });
});

describe('Page Structure', () => {
  const pagePaths = [
    'src/index.html',
    'src/pages/introduction/index.html',
    'src/pages/understanding-mcp/index.html',
    'src/pages/integrating-mcp/index.html',
    'src/pages/building-mcp-servers/index.html',
    'src/pages/best-practices/index.html'
  ];
  
  test.each(pagePaths)('%s has proper HTML5 structure', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Check doctype
    expect(dom.window.document.doctype.name).toBe('html');
    
    // Check html, head, body elements
    expect(document.querySelector('html')).not.toBeNull();
    expect(document.querySelector('head')).not.toBeNull();
    expect(document.querySelector('body')).not.toBeNull();
  });
  
  test.each(pagePaths)('%s includes required meta tags', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Check meta charset
    const metaCharset = document.querySelector('meta[charset]');
    expect(metaCharset).not.toBeNull();
    expect(metaCharset.getAttribute('charset').toLowerCase()).toBe('utf-8');
    
    // Check meta viewport
    const metaViewport = document.querySelector('meta[name="viewport"]');
    expect(metaViewport).not.toBeNull();
    expect(metaViewport.getAttribute('content')).toContain('width=device-width');
  });
  
  test.each(pagePaths)('%s links to main CSS file', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Check for CSS link
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    const mainCssLink = Array.from(cssLinks).find(link => 
      link.getAttribute('href').includes('main.css')
    );
    
    expect(mainCssLink).not.toBeNull();
  });
});

describe('Content Sections', () => {
  const pagePaths = [
    'src/index.html',
    'src/pages/introduction/index.html',
    'src/pages/understanding-mcp/index.html',
    'src/pages/integrating-mcp/index.html',
    'src/pages/building-mcp-servers/index.html',
    'src/pages/best-practices/index.html'
  ];
  
  test.each(pagePaths)('%s has at least one h1 heading', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Check for h1
    const h1Elements = document.querySelectorAll('h1');
    expect(h1Elements.length).toBeGreaterThanOrEqual(1);
  });
  
  test.each(pagePaths)('%s has headings for content structure', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Get all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
    
    // Check that we have a mix of heading levels for content structure
    const headingLevels = new Set(
      Array.from(headings).map(heading => 
        parseInt(heading.tagName.substring(1))
      )
    );
    
    // We should have at least 2 different heading levels for proper content structure
    expect(headingLevels.size).toBeGreaterThanOrEqual(2);
  });
  
  test.each(pagePaths)('%s uses semantic sectioning elements', (pagePath) => {
    const dom = loadHtmlFile(pagePath);
    const document = dom.window.document;
    
    // Check for semantic elements
    const semanticElements = document.querySelectorAll('header, footer, section, article, nav, main, aside');
    expect(semanticElements.length).toBeGreaterThan(0);
  });
});

describe('Consistency', () => {
  const pagePaths = [
    'src/index.html',
    'src/pages/introduction/index.html',
    'src/pages/understanding-mcp/index.html',
    'src/pages/integrating-mcp/index.html',
    'src/pages/building-mcp-servers/index.html',
    'src/pages/best-practices/index.html'
  ];
  
  test('Header and navigation are consistent across pages', () => {
    const headerTexts = [];
    const navItemCounts = [];
    
    pagePaths.forEach(pagePath => {
      const dom = loadHtmlFile(pagePath);
      const document = dom.window.document;
      
      // Check header logo text
      const logo = document.querySelector('.logo a');
      if (logo) {
        headerTexts.push(logo.textContent);
      }
      
      // Check nav item count
      const navItems = document.querySelectorAll('nav ul li');
      navItemCounts.push(navItems.length);
    });
    
    // All header texts should be the same
    const uniqueHeaderTexts = new Set(headerTexts);
    expect(uniqueHeaderTexts.size).toBeLessThanOrEqual(1);
    
    // All nav item counts should be the same
    const uniqueNavItemCounts = new Set(navItemCounts);
    expect(uniqueNavItemCounts.size).toBeLessThanOrEqual(1);
  });
  
  test('CSS references are consistent across pages', () => {
    const mainCssPaths = [];
    
    pagePaths.forEach(pagePath => {
      const dom = loadHtmlFile(pagePath);
      const document = dom.window.document;
      
      // Check main CSS path
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
      const mainCssLink = Array.from(cssLinks).find(link => 
        link.getAttribute('href').includes('main.css')
      );
      
      if (mainCssLink) {
        mainCssPaths.push(mainCssLink.getAttribute('href'));
      }
    });
    
    // Check that all pages reference the same CSS file (accounting for relative paths)
    const normalizedPaths = mainCssPaths.map(cssPath => 
      cssPath.split('/').pop()
    );
    
    const uniquePaths = new Set(normalizedPaths);
    expect(uniquePaths.size).toBe(1);
  });
}); 
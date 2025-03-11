/**
 * Puppeteer helper for content analysis
 * This script provides functions for analyzing content on the AI Dev Education site
 */

const puppeteer = require('puppeteer');

class ContentAnalyzer {
  constructor() {
    this.browser = null;
    this.page = null;
  }
  
  async initialize() {
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 800 }
    });
    this.page = await this.browser.newPage();
    
    // Add error handling for page errors
    this.page.on('error', err => {
      console.error('Page error:', err);
    });
    
    // Add console logging from the browser
    this.page.on('console', msg => {
      console.log('Browser console:', msg.text());
    });
    
    return this;
  }
  
  async navigateTo(url) {
    try {
      await this.page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 // Increase timeout to 30 seconds
      });
      
      // Use setTimeout instead of waitForTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return this;
    } catch (error) {
      console.error(`Error navigating to ${url}:`, error);
      throw error;
    }
  }
  
  async getPageTitle() {
    try {
      return await this.page.title();
    } catch (error) {
      console.error('Error getting page title:', error);
      return 'Error getting title';
    }
  }
  
  async getHeadings() {
    try {
      return await this.page.evaluate(() => {
        const headings = {};
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
          headings[tag] = Array.from(document.querySelectorAll(tag)).map(h => h.textContent.trim());
        });
        return headings;
      });
    } catch (error) {
      console.error('Error getting headings:', error);
      return { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] };
    }
  }
  
  async getContentSections() {
    try {
      return await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('section')).map(section => {
          const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
          const headingText = heading ? heading.textContent.trim() : 'Unnamed Section';
          const paragraphs = Array.from(section.querySelectorAll('p')).map(p => p.textContent.trim());
          
          return {
            heading: headingText,
            paragraphCount: paragraphs.length,
            wordCount: paragraphs.join(' ').split(/\s+/).length,
            hasImages: section.querySelectorAll('img').length > 0,
            hasLists: section.querySelectorAll('ul, ol').length > 0,
            hasCode: section.querySelectorAll('code, pre').length > 0
          };
        });
      });
    } catch (error) {
      console.error('Error getting content sections:', error);
      return [];
    }
  }
  
  async getNavigationLinks() {
    try {
      return await this.page.evaluate(() => {
        return Array.from(document.querySelectorAll('nav a')).map(link => ({
          text: link.textContent.trim(),
          href: link.getAttribute('href')
        }));
      });
    } catch (error) {
      console.error('Error getting navigation links:', error);
      return [];
    }
  }
  
  async takeScreenshot(path) {
    try {
      await this.page.screenshot({ path });
      return this;
    } catch (error) {
      console.error('Error taking screenshot:', error);
      return this;
    }
  }
  
  async analyzePageContent(url, outputPath) {
    console.log(`Analyzing content at: ${url}`);
    try {
      await this.navigateTo(url);
      
      // Debug: Log the current URL
      const currentUrl = this.page.url();
      console.log(`Current URL: ${currentUrl}`);
      
      // Debug: Check if page loaded correctly
      const content = await this.page.content();
      console.log(`Page content length: ${content.length} characters`);
      
      const title = await this.getPageTitle();
      const headings = await this.getHeadings();
      const contentSections = await this.getContentSections();
      const navigationLinks = await this.getNavigationLinks();
      
      const analysis = {
        url,
        title,
        headings,
        contentSections,
        navigationLinks,
        summary: {
          h1Count: headings.h1.length,
          h2Count: headings.h2.length,
          h3Count: headings.h3.length,
          sectionCount: contentSections.length,
          totalWordCount: contentSections.reduce((sum, section) => sum + section.wordCount, 0),
          sectionsWithImages: contentSections.filter(s => s.hasImages).length,
          sectionsWithLists: contentSections.filter(s => s.hasLists).length,
          sectionsWithCode: contentSections.filter(s => s.hasCode).length
        }
      };
      
      if (outputPath) {
        const fs = require('fs');
        fs.writeFileSync(outputPath, JSON.stringify(analysis, null, 2));
        console.log(`Analysis saved to: ${outputPath}`);
      }
      
      return analysis;
    } catch (error) {
      console.error(`Error analyzing ${url}:`, error);
      
      // Return a minimal analysis object in case of error
      const errorAnalysis = {
        url,
        title: 'Error',
        headings: { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] },
        contentSections: [],
        navigationLinks: [],
        summary: {
          h1Count: 0,
          h2Count: 0,
          h3Count: 0,
          sectionCount: 0,
          totalWordCount: 0,
          sectionsWithImages: 0,
          sectionsWithLists: 0,
          sectionsWithCode: 0
        }
      };
      
      if (outputPath) {
        const fs = require('fs');
        fs.writeFileSync(outputPath, JSON.stringify(errorAnalysis, null, 2));
        console.log(`Error analysis saved to: ${outputPath}`);
      }
      
      return errorAnalysis;
    }
  }
  
  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

module.exports = ContentAnalyzer; 
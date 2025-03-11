/**
 * Puppeteer test script for AI Dev Education site
 * This script navigates through the site and captures screenshots
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function testSite() {
  console.log('Starting Puppeteer test...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Pages to visit
    const pages = [
      { url: 'http://localhost:8080', name: 'homepage' },
      { url: 'http://localhost:8080/pages/introduction/index.html', name: 'introduction' },
      { url: 'http://localhost:8080/pages/understanding-mcp/index.html', name: 'understanding-mcp' },
      { url: 'http://localhost:8080/pages/integrating-mcp/index.html', name: 'integration' },
      { url: 'http://localhost:8080/pages/building-mcp-servers/index.html', name: 'building-servers' },
      { url: 'http://localhost:8080/pages/best-practices/index.html', name: 'best-practices' }
    ];
    
    // Visit each page and take a screenshot
    for (const page_info of pages) {
      console.log(`Navigating to ${page_info.name}...`);
      await page.goto(page_info.url, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', `${page_info.name}.png`) });
      console.log(`${page_info.name} screenshot captured`);
    }
    
    console.log('Puppeteer test completed successfully!');
  } catch (error) {
    console.error('Error during Puppeteer test:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

// Run the test
testSite().catch(console.error); 
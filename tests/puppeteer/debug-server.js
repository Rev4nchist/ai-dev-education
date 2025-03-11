/**
 * Debug script to check the server
 */

const puppeteer = require('puppeteer');

async function debugServer() {
  console.log('Starting debug...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Add console logging from the browser
    page.on('console', msg => {
      console.log('Browser console:', msg.text());
    });
    
    // Navigate to the homepage
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:8080', { 
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Get the page content
    const content = await page.content();
    console.log(`Page content length: ${content.length} characters`);
    console.log(`Page content: ${content.substring(0, 500)}...`);
    
    // Get the page title
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Take a screenshot
    await page.screenshot({ path: 'debug-screenshot.png' });
    console.log('Screenshot saved to debug-screenshot.png');
    
    // Wait for user to see the page
    console.log('Waiting for 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    console.log('Debug completed.');
  } catch (error) {
    console.error('Error during debug:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

// Run the debug
debugServer().catch(console.error); 
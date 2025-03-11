/**
 * Debug script to check the updated site
 */

const puppeteer = require('puppeteer');

async function debugUpdatedSite() {
  console.log('Starting debug of updated site...');
  
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
    
    // Take a screenshot
    await page.screenshot({ path: 'updated-homepage.png' });
    console.log('Homepage screenshot saved to updated-homepage.png');
    
    // Navigate to the integration page
    console.log('Navigating to integration page...');
    await page.goto('http://localhost:8080/pages/integrating-mcp/index.html', { 
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Take a screenshot
    await page.screenshot({ path: 'updated-integration.png' });
    console.log('Integration page screenshot saved to updated-integration.png');
    
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
debugUpdatedSite().catch(console.error); 
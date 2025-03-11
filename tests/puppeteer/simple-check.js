/**
 * Simple script to check the AI Dev Education site
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function simpleCheck() {
    console.log('Starting simple check...');
    
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '..', 'improvement-check');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    // Launch browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1280, height: 800 }
    });
    
    try {
        const page = await browser.newPage();
        
        // Enable console logging
        page.on('console', msg => console.log('Browser console:', msg.text()));
        
        // Check homepage
        console.log('Checking homepage...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'homepage.png'), fullPage: true });
        
        // Check integration page
        console.log('Checking integration page...');
        await page.goto('http://localhost:3000/pages/integrating-mcp/index.html', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'integration.png'), fullPage: true });
        
        // Check all pages for consistency
        const pages = [
            'pages/introduction/index.html',
            'pages/understanding-mcp/index.html',
            'pages/building-mcp-servers/index.html',
            'pages/best-practices/index.html'
        ];
        
        for (const pagePath of pages) {
            const pageName = pagePath.split('/')[1];
            console.log(`Checking ${pageName} page...`);
            await page.goto(`http://localhost:3000/${pagePath}`, { waitUntil: 'networkidle0' });
            await page.screenshot({ path: path.join(screenshotsDir, `${pageName}.png`), fullPage: true });
        }
        
        console.log('Simple check completed successfully!');
        console.log(`Screenshots saved to: ${screenshotsDir}`);
        
        // Keep browser open for manual inspection
        console.log('Browser will remain open for manual inspection. Press Ctrl+C to exit.');
        
    } catch (error) {
        console.error('Error during simple check:', error);
        await browser.close();
    }
}

// Run the check
simpleCheck().catch(console.error); 
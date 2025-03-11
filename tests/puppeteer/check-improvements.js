/**
 * Script to check all the improvements made to the AI Dev Education site
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function checkImprovements() {
    console.log('Starting improvement check...');
    
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '..', 'improvement-check');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    // Launch browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });
    
    try {
        const page = await browser.newPage();
        
        // Enable console logging
        page.on('console', msg => console.log('Browser console:', msg.text()));
        
        // Check homepage
        console.log('Checking homepage...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'homepage.png'), fullPage: true });
        
        // Check responsive design (mobile)
        console.log('Checking mobile responsiveness...');
        await page.setViewport({ width: 375, height: 667 });
        await page.reload({ waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'homepage-mobile.png'), fullPage: true });
        
        // Check responsive design (tablet)
        console.log('Checking tablet responsiveness...');
        await page.setViewport({ width: 768, height: 1024 });
        await page.reload({ waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'homepage-tablet.png'), fullPage: true });
        
        // Reset viewport
        await page.setViewport({ width: 1280, height: 800 });
        
        // Check scroll animations
        console.log('Checking scroll animations...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitFor(500);
        
        // Scroll down slowly to trigger animations
        await page.evaluate(() => {
            return new Promise((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    
                    if (totalHeight >= document.body.scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
        
        await page.screenshot({ path: path.join(screenshotsDir, 'homepage-scrolled.png'), fullPage: true });
        
        // Check integration page
        console.log('Checking integration page...');
        await page.goto('http://localhost:3000/pages/integrating-mcp/index.html', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotsDir, 'integration.png'), fullPage: true });
        
        // Check tab functionality
        console.log('Checking tab functionality...');
        await page.click('.tab[data-tab="cursor"]');
        await page.waitFor(500);
        await page.screenshot({ path: path.join(screenshotsDir, 'integration-cursor-tab.png'), fullPage: true });
        
        await page.click('.tab[data-tab="vscode"]');
        await page.waitFor(500);
        await page.screenshot({ path: path.join(screenshotsDir, 'integration-vscode-tab.png'), fullPage: true });
        
        // Check accessibility features
        console.log('Checking accessibility features...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
        
        // Test skip-to-content link
        await page.keyboard.press('Tab');
        await page.screenshot({ path: path.join(screenshotsDir, 'skip-link-focus.png') });
        await page.keyboard.press('Enter');
        await page.screenshot({ path: path.join(screenshotsDir, 'skip-link-activated.png') });
        
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
        
        console.log('Improvement check completed successfully!');
        console.log(`Screenshots saved to: ${screenshotsDir}`);
        
        // Wait for user to view the browser
        console.log('Keeping browser open for 10 seconds for manual inspection...');
        await page.waitFor(10000);
        
    } catch (error) {
        console.error('Error during improvement check:', error);
    } finally {
        await browser.close();
    }
}

// Run the check
checkImprovements().catch(console.error); 
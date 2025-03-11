/**
 * Layout analysis script for AI Dev Education site
 * This script analyzes the layout, spacing, and component orientation of all pages
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function analyzeLayout() {
  console.log('Starting layout analysis...');
  
  // Create output directory
  const outputDir = path.join(__dirname, '..', 'layout-analysis');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Pages to analyze
  const pages = [
    { url: 'http://localhost:8080', name: 'homepage' },
    { url: 'http://localhost:8080/pages/introduction/index.html', name: 'introduction' },
    { url: 'http://localhost:8080/pages/understanding-mcp/index.html', name: 'understanding-mcp' },
    { url: 'http://localhost:8080/pages/integrating-mcp/index.html', name: 'integrating-mcp' },
    { url: 'http://localhost:8080/pages/building-mcp-servers/index.html', name: 'building-mcp-servers' },
    { url: 'http://localhost:8080/pages/best-practices/index.html', name: 'best-practices' }
  ];
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    const page = await browser.newPage();
    const results = [];
    
    // Analyze each page
    for (const pageInfo of pages) {
      console.log(`Analyzing layout for ${pageInfo.name}...`);
      
      // Navigate to the page
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0' });
      
      // Take a full-page screenshot
      await page.screenshot({ 
        path: path.join(outputDir, `${pageInfo.name}-full.png`),
        fullPage: true 
      });
      
      // Take a mobile viewport screenshot
      await page.setViewport({ width: 375, height: 667 });
      await page.screenshot({ 
        path: path.join(outputDir, `${pageInfo.name}-mobile.png`),
        fullPage: true 
      });
      
      // Reset viewport
      await page.setViewport({ width: 1280, height: 800 });
      
      // Analyze layout metrics
      const layoutMetrics = await page.evaluate(() => {
        // Helper function to get computed style
        const getStyle = (element, property) => {
          return window.getComputedStyle(element).getPropertyValue(property);
        };
        
        // Analyze container elements
        const containers = Array.from(document.querySelectorAll('.container'));
        const containerAnalysis = containers.map(container => {
          const rect = container.getBoundingClientRect();
          return {
            width: rect.width,
            padding: getStyle(container, 'padding'),
            margin: getStyle(container, 'margin'),
            maxWidth: getStyle(container, 'max-width')
          };
        });
        
        // Analyze section elements
        const sections = Array.from(document.querySelectorAll('section'));
        const sectionAnalysis = sections.map(section => {
          const rect = section.getBoundingClientRect();
          return {
            selector: section.className || 'unnamed-section',
            paddingTop: getStyle(section, 'padding-top'),
            paddingBottom: getStyle(section, 'padding-bottom'),
            paddingLeft: getStyle(section, 'padding-left'),
            paddingRight: getStyle(section, 'padding-right'),
            marginTop: getStyle(section, 'margin-top'),
            marginBottom: getStyle(section, 'margin-bottom'),
            height: rect.height
          };
        });
        
        // Analyze card elements
        const cards = Array.from(document.querySelectorAll('.card'));
        const cardAnalysis = cards.map(card => {
          return {
            padding: getStyle(card, 'padding'),
            margin: getStyle(card, 'margin'),
            borderRadius: getStyle(card, 'border-radius'),
            boxShadow: getStyle(card, 'box-shadow')
          };
        });
        
        // Analyze spacing between elements
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        const headingSpacing = headings.map(heading => {
          return {
            element: heading.tagName,
            marginTop: getStyle(heading, 'margin-top'),
            marginBottom: getStyle(heading, 'margin-bottom')
          };
        });
        
        // Analyze navigation
        const nav = document.querySelector('nav');
        const navAnalysis = nav ? {
          padding: getStyle(nav, 'padding'),
          height: nav.getBoundingClientRect().height,
          itemSpacing: nav.querySelector('ul li') ? 
            getStyle(nav.querySelector('ul li'), 'margin-right') : 'N/A'
        } : null;
        
        return {
          containers: containerAnalysis,
          sections: sectionAnalysis,
          cards: cardAnalysis,
          headingSpacing: headingSpacing,
          navigation: navAnalysis
        };
      });
      
      // Save layout metrics
      const outputPath = path.join(outputDir, `${pageInfo.name}-layout.json`);
      fs.writeFileSync(outputPath, JSON.stringify(layoutMetrics, null, 2));
      
      // Add to results
      results.push({
        name: pageInfo.name,
        metrics: layoutMetrics
      });
      
      console.log(`Layout analysis for ${pageInfo.name} completed.`);
    }
    
    // Generate summary report
    const summaryPath = path.join(outputDir, 'layout-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
    
    // Generate HTML report
    const htmlReport = generateHtmlReport(results);
    const htmlPath = path.join(outputDir, 'layout-report.html');
    fs.writeFileSync(htmlPath, htmlReport);
    
    console.log(`Layout analysis completed. Reports saved to: ${outputDir}`);
  } catch (error) {
    console.error('Error during layout analysis:', error);
  } finally {
    await browser.close();
  }
}

function generateHtmlReport(results) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Dev Education Layout Analysis</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
    h2 { color: #444; margin-top: 30px; }
    h3 { color: #555; }
    .page-section { background-color: #f8f8f8; padding: 20px; border-radius: 5px; margin-bottom: 30px; }
    .metrics-section { margin-bottom: 20px; }
    .image-container { display: flex; gap: 20px; margin: 20px 0; }
    .image-container img { max-width: 45%; border: 1px solid #ddd; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
    th { background-color: #f0f0f0; }
    .recommendation { background-color: #e7f3fe; padding: 15px; border-left: 4px solid #2196F3; margin: 20px 0; }
    .issue { color: #e74c3c; }
  </style>
</head>
<body>
  <h1>AI Dev Education Layout Analysis</h1>
  
  <div class="recommendations">
    <h2>Overall Recommendations</h2>
    <div class="recommendation">
      <p><strong>Container Consistency:</strong> Ensure all containers have consistent max-width and padding across pages.</p>
    </div>
    <div class="recommendation">
      <p><strong>Section Spacing:</strong> Standardize vertical spacing between sections for better rhythm.</p>
    </div>
    <div class="recommendation">
      <p><strong>Mobile Responsiveness:</strong> Review padding on mobile viewports to ensure content isn't cramped.</p>
    </div>
    <div class="recommendation">
      <p><strong>Card Components:</strong> Standardize card padding and margins for consistent appearance.</p>
    </div>
    <div class="recommendation">
      <p><strong>Navigation:</strong> Ensure consistent spacing between navigation items.</p>
    </div>
  </div>
  
  ${results.map(page => `
    <div class="page-section">
      <h2>${page.name}</h2>
      
      <div class="image-container">
        <img src="${page.name}-full.png" alt="${page.name} desktop view">
        <img src="${page.name}-mobile.png" alt="${page.name} mobile view">
      </div>
      
      <div class="metrics-section">
        <h3>Container Metrics</h3>
        <table>
          <thead>
            <tr>
              <th>Width</th>
              <th>Padding</th>
              <th>Margin</th>
              <th>Max Width</th>
            </tr>
          </thead>
          <tbody>
            ${page.metrics.containers.map(container => `
              <tr>
                <td>${container.width}px</td>
                <td>${container.padding}</td>
                <td>${container.margin}</td>
                <td>${container.maxWidth}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      <div class="metrics-section">
        <h3>Section Metrics</h3>
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>Padding Top</th>
              <th>Padding Bottom</th>
              <th>Margin Top</th>
              <th>Margin Bottom</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            ${page.metrics.sections.map(section => `
              <tr>
                <td>${section.selector}</td>
                <td>${section.paddingTop}</td>
                <td>${section.paddingBottom}</td>
                <td>${section.marginTop}</td>
                <td>${section.marginBottom}</td>
                <td>${section.height}px</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      ${page.metrics.cards.length > 0 ? `
        <div class="metrics-section">
          <h3>Card Metrics</h3>
          <table>
            <thead>
              <tr>
                <th>Padding</th>
                <th>Margin</th>
                <th>Border Radius</th>
                <th>Box Shadow</th>
              </tr>
            </thead>
            <tbody>
              ${page.metrics.cards.map(card => `
                <tr>
                  <td>${card.padding}</td>
                  <td>${card.margin}</td>
                  <td>${card.borderRadius}</td>
                  <td>${card.boxShadow}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}
      
      <div class="metrics-section">
        <h3>Navigation</h3>
        ${page.metrics.navigation ? `
          <table>
            <thead>
              <tr>
                <th>Padding</th>
                <th>Height</th>
                <th>Item Spacing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${page.metrics.navigation.padding}</td>
                <td>${page.metrics.navigation.height}px</td>
                <td>${page.metrics.navigation.itemSpacing}</td>
              </tr>
            </tbody>
          </table>
        ` : '<p>No navigation found</p>'}
      </div>
    </div>
  `).join('')}
</body>
</html>
`;
}

// Run the analysis
analyzeLayout().catch(console.error); 
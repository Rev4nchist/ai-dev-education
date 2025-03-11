/**
 * Content analysis script for AI Dev Education site
 * This script analyzes the content of all pages and generates a report
 */

const ContentAnalyzer = require('./content-analyzer');
const fs = require('fs');
const path = require('path');

async function analyzeAllPages() {
  console.log('Starting content analysis...');
  
  // Create output directory
  const outputDir = path.join(__dirname, '..', 'content-analysis');
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
  
  // Initialize analyzer
  const analyzer = await new ContentAnalyzer().initialize();
  
  try {
    // Analyze each page
    const results = [];
    
    for (const page of pages) {
      const outputPath = path.join(outputDir, `${page.name}.json`);
      const analysis = await analyzer.analyzePageContent(page.url, outputPath);
      results.push({
        name: page.name,
        title: analysis.title,
        summary: analysis.summary
      });
    }
    
    // Generate summary report
    const summaryPath = path.join(outputDir, 'summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
    
    // Generate HTML report
    const htmlReport = generateHtmlReport(results);
    const htmlPath = path.join(outputDir, 'report.html');
    fs.writeFileSync(htmlPath, htmlReport);
    
    console.log(`Content analysis completed. Reports saved to: ${outputDir}`);
  } catch (error) {
    console.error('Error during content analysis:', error);
  } finally {
    await analyzer.close();
  }
}

function generateHtmlReport(results) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Dev Education Content Analysis</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: left; }
    th { background-color: #f8f8f8; }
    tr:hover { background-color: #f5f5f5; }
    .summary { background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .warning { color: #e74c3c; }
  </style>
</head>
<body>
  <h1>AI Dev Education Content Analysis</h1>
  
  <div class="summary">
    <h2>Summary</h2>
    <p>Total pages analyzed: ${results.length}</p>
  </div>
  
  <h2>Page Analysis</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Title</th>
        <th>H1 Count</th>
        <th>H2 Count</th>
        <th>H3 Count</th>
        <th>Sections</th>
        <th>Word Count</th>
        <th>Images</th>
        <th>Lists</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      ${results.map(page => `
        <tr>
          <td>${page.name}</td>
          <td>${page.title}</td>
          <td>${page.summary.h1Count}</td>
          <td>${page.summary.h2Count}</td>
          <td>${page.summary.h3Count}</td>
          <td>${page.summary.sectionCount}</td>
          <td>${page.summary.totalWordCount}</td>
          <td>${page.summary.sectionsWithImages}</td>
          <td>${page.summary.sectionsWithLists}</td>
          <td>${page.summary.sectionsWithCode}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  
  <h2>Content Recommendations</h2>
  <ul>
    ${results.map(page => {
      const recommendations = [];
      
      if (page.summary.h1Count === 0) {
        recommendations.push(`<li class="warning">${page.name}: Missing H1 heading</li>`);
      }
      
      if (page.summary.totalWordCount < 300) {
        recommendations.push(`<li class="warning">${page.name}: Low word count (${page.summary.totalWordCount} words)</li>`);
      }
      
      if (page.summary.sectionsWithImages === 0) {
        recommendations.push(`<li>${page.name}: Consider adding images to enhance content</li>`);
      }
      
      if (page.name.includes('mcp') && page.summary.sectionsWithCode === 0) {
        recommendations.push(`<li>${page.name}: Consider adding code examples for technical content</li>`);
      }
      
      return recommendations.join('');
    }).join('')}
  </ul>
</body>
</html>
`;
}

// Run the analysis
analyzeAllPages().catch(console.error); 
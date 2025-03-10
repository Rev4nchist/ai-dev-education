/**
 * Simple Express server to serve the AI Dev Education site
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving files from: ${path.join(__dirname, 'src')}`);
}); 
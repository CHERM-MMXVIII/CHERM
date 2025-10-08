const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Automatically serve HTML files
const htmlFolder = path.join(__dirname, 'html');
fs.readdirSync(htmlFolder).forEach(file => {
  if (file.endsWith('.html')) {
    const route = file === 'index.html' ? '/' : `/${file.replace('.html', '')}`;
    app.get(route, (req, res) => {
      res.sendFile(path.join(htmlFolder, file));
    });
  }
});

// Catch-all 404
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://192.168.18.103:${PORT}`);
});

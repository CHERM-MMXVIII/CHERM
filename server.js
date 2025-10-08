const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/html', express.static(path.join(__dirname, 'html')));

// Route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for services.html
app.get('/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));

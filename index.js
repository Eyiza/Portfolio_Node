const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/index.html' || req.url === '/home') {
        let filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    }
    else if(req.url === '/about.html') {
        let filePath = path.join(__dirname, 'public', 'about.html');
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    }
    else if(req.url === '/contact.html') {
        let filePath = path.join(__dirname, 'public', 'contact.html');
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    }
    else {
        let filePath = path.join(__dirname, 'public', '404.html');
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    }
});

// Create a port - Listen on port 3000
const port = process.env.PORT || 3000;
server.listen(port, 'localhost', () => {
    console.log(`Server running on port ${port}`);
});

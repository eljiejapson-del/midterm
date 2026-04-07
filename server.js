// Simple HTTP Server for Eljie Peteros' Webpage
// Author: Eljie Peteros
// Date: April 7, 2026

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

// Create HTTP server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    // Handle different routes
    if (req.url === '/' || req.url === '/index.html') {
        // Serve the main HTML file
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // Handle other files (CSS, JS, images, etc.)
        const filePath = path.join(__dirname, req.url);

        // Security check - only serve files from current directory
        if (!filePath.startsWith(__dirname)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
                return;
            }

            // Determine content type based on file extension
            const ext = path.extname(filePath).toLowerCase();
            const contentTypes = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.ico': 'image/x-icon'
            };

            const contentType = contentTypes[ext] || 'text/plain';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    }
});

// Start the server
server.listen(PORT, () => {
    console.log('=====================================');
    console.log('🚀 Server is running!');
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🌐 Network: http://YOUR_IP_ADDRESS:${PORT}`);
    console.log('=====================================');
    console.log('📋 Student: Eljie Peteros');
    console.log('📚 Course: Web Development');
    console.log('🎯 Port: 8080');
    console.log('=====================================');
    console.log('Press Ctrl+C to stop the server');
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Please try a different port.`);
    } else {
        console.error('❌ Server error:', err);
    }
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n👋 Server stopped by user');
    process.exit(0);
});

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.wasm': 'application/wasm',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // API Route for Send Email
    if (pathname === '/api/send-email') {
        let bodyStr = '';
        req.on('data', chunk => { bodyStr += chunk; });
        req.on('end', async () => {
            try {
                req.body = bodyStr ? JSON.parse(bodyStr) : {};
            } catch (e) {
                req.body = {};
            }
            res.status = function (code) {
                this.statusCode = code;
                return this;
            };
            res.json = function (data) {
                this.setHeader('Content-Type', 'application/json');
                this.end(JSON.stringify(data));
                return this;
            };
            try {
                const handler = require('./api/send-email');
                await handler(req, res);
            } catch (err) {
                console.error('API Send-Email Error:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Server error', details: err.message }));
            }
        });
        return;
    }

    if (pathname === '/') {
        pathname = '/index.html';
    }

    let filePath = path.join(__dirname, pathname);

    // Support clean extensionless URLs (e.g. /login -> login.html, /dashboard -> dashboard.html)
    if (!path.extname(filePath)) {
        if (fs.existsSync(filePath + '.html')) {
            filePath = filePath + '.html';
        }
    }

    // Security check: ensure path is within directory
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // Check if directory with index.html or test.html
            if (stats && stats.isDirectory()) {
                const indexFile = path.join(filePath, 'index.html');
                const testFile = path.join(filePath, 'test.html');
                if (fs.existsSync(indexFile)) {
                    serveFile(indexFile, res);
                    return;
                } else if (fs.existsSync(testFile)) {
                    serveFile(testFile, res);
                    return;
                }
            }
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found: ' + pathname);
            return;
        }

        serveFile(filePath, res);
    });
});

function serveFile(filePath, res) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error: ' + err.message);
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
}

server.listen(PORT, () => {
    console.log(`\n🚀 ACT Test Prep App Server running at: http://localhost:${PORT}`);
    console.log(`   - Home / Diagnostic Portal: http://localhost:${PORT}/index.html`);
    console.log(`   - Practice Test 1: http://localhost:${PORT}/act1.html`);
    console.log(`   - Student Dashboard: http://localhost:${PORT}/dashboard.html`);
    console.log(`   - Admin Portal: http://localhost:${PORT}/admin.html\n`);
});

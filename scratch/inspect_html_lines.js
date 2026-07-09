const fs = require('fs');

const html10 = fs.readFileSync('act-diagnostic-10/act1.html', 'utf8');
const lines10 = html10.split('\n');

console.log("=== act-diagnostic-10/act1.html lines containing 'Practice Test' ===");
lines10.forEach((l, idx) => {
    if (l.toLowerCase().includes('practice test') || l.toLowerCase().includes('<title>') || l.toLowerCase().includes('h1')) {
        console.log(`${idx + 1}: ${l.trim()}`);
    }
});

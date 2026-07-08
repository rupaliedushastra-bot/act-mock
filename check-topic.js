const https = require('https');

const SUPABASE_URL = 'https://dyvvhmuegtzooijrtwyd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';

async function login() {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({ email: 'rupali.eduquest@gmail.com', password: 'Lovelypanda' });
        const req = https.request(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Content-Type': 'application/json'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function getTopicReport(token) {
    return new Promise((resolve, reject) => {
        const req = https.request(`${SUPABASE_URL}/rest/v1/sat_topic_report?select=*&limit=1`, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${token}`
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });
        req.on('error', reject);
        req.end();
    });
}

async function main() {
    const auth = await login();
    if (auth.access_token) {
        console.log("Logged in!");
        const data = await getTopicReport(auth.access_token);
        console.log(data);
    } else {
        console.log("Login failed:", auth);
    }
}
main();

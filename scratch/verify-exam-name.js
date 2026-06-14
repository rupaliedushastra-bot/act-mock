const https = require('https');

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
const supabaseUrl = 'https://dyvvhmuegtzooijrtwyd.supabase.co';

function postRequest(url, body) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify(body);
        const options = {
            method: 'POST',
            headers: {
                'apikey': anonKey,
                'Authorization': `Bearer ${anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            }
        };
        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve({ statusCode: res.statusCode, data }));
        });
        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

async function main() {
    // Test insert with exam_name
    console.log("Testing insert with exam_name column...");
    const result = await postRequest(`${supabaseUrl}/rest/v1/sat_results`, {
        student_name: 'Test Student',
        student_email: 'teststudent@eduquest.com',
        student_phone: '+91 9999999999',
        correct: 5,
        wrong: 5,
        skipped: 5,
        total: 15,
        percentage: 33,
        grade: 'F',
        sat_score: 900,
        exam_name: 'SAT Practice Exam 2',
        submitted_at: new Date().toISOString(),
        student_answers: []
    });
    console.log("Status:", result.statusCode);
    if (result.statusCode === 201) {
        const inserted = JSON.parse(result.data);
        console.log("✅ exam_name column EXISTS and insert worked!");
        console.log("Inserted row:", { id: inserted[0].id, exam_name: inserted[0].exam_name, email: inserted[0].student_email });
    } else if (result.statusCode === 400) {
        const err = JSON.parse(result.data);
        console.log("❌ FAILED:", err.message);
        console.log("👉 Go to Supabase SQL Editor and run:");
        console.log("   ALTER TABLE sat_results ADD COLUMN IF NOT EXISTS exam_name TEXT;");
    } else {
        console.log("Response:", result.data);
    }
}

main();

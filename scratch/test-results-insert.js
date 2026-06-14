const https = require('https');

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
const supabaseUrl = 'https://dyvvhmuegtzooijrtwyd.supabase.co';

function insertResult(payloadObj) {
    return new Promise((resolve, reject) => {
        const url = `${supabaseUrl}/rest/v1/sat_results`;
        const payload = JSON.stringify(payloadObj);
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
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, data: data });
            });
        });

        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

async function main() {
    try {
        console.log("Inserting minimal row...");
        let payload = {
            student_name: 'Test Student',
            student_email: 'teststudent@eduquest.com',
            student_phone: '+91 9999999999',
            correct: 5,
            wrong: 5,
            skipped: 5,
            total: 15,
            percentage: 33,
            grade: 'F'
        };
        let result = await insertResult(payload);
        console.log("Minimal Row Result status:", result.statusCode);
        console.log("Minimal Row Response:", result.data);

        if (result.statusCode === 201 || result.statusCode === 200) {
            console.log("\nProbing other columns by adding them one by one...");
            
            // Try student_answers
            console.log("Testing student_answers...");
            let resAnswers = await insertResult({
                ...payload,
                student_answers: []
            });
            console.log("student_answers support status:", resAnswers.statusCode);
            console.log("student_answers response:", resAnswers.data);

            // Try exam_name
            console.log("Testing exam_name...");
            let resExam = await insertResult({
                ...payload,
                exam_name: 'Test Exam'
            });
            console.log("exam_name support status:", resExam.statusCode);
            console.log("exam_name response:", resExam.data);
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

main();

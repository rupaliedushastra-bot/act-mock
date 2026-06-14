const https = require('https');

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
const supabaseUrl = 'https://dyvvhmuegtzooijrtwyd.supabase.co';

function getTable(tableName) {
    return new Promise((resolve, reject) => {
        const url = `${supabaseUrl}/rest/v1/${tableName}?select=*`;
        const options = {
            headers: {
                'apikey': anonKey,
                'Authorization': `Bearer ${anonKey}`
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error(`Failed to parse: ${data}`));
                    }
                } else {
                    reject(new Error(`Status ${res.statusCode}: ${data}`));
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    try {
        console.log("Fetching profiles...");
        const profiles = await getTable('profiles');
        console.log(`Profiles: ${profiles.length}`);
        console.log(profiles.map(p => ({ id: p.id, email: p.email, has_access: p.has_access })));

        console.log("\nFetching sat_results...");
        const sat_results = await getTable('sat_results');
        console.log(`sat_results: ${sat_results.length}`);
        console.log(sat_results.map(r => ({ id: r.id, email: r.student_email, name: r.student_name, exam: r.exam_name, submitted: r.submitted_at })));
        
        console.log("\nFetching sat_registrations...");
        const sat_registrations = await getTable('sat_registrations');
        console.log(`sat_registrations: ${sat_registrations.length}`);
        console.log(sat_registrations.map(reg => ({ id: reg.id, email: reg.student_email, name: reg.student_name, exam: reg.exam_name })));
    } catch (err) {
        console.error("Error:", err);
    }
}

main();

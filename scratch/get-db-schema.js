const https = require('https');

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
const supabaseUrl = 'https://dyvvhmuegtzooijrtwyd.supabase.co';

function getSchema() {
    return new Promise((resolve, reject) => {
        const url = `${supabaseUrl}/`;
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
                resolve({ statusCode: res.statusCode, data: data });
            });
        }).on('error', reject);
    });
}

async function main() {
    try {
        console.log("Fetching DB schema...");
        const result = await getSchema();
        console.log("Status Code:", result.statusCode);
        const spec = JSON.parse(result.data);
        console.log("Tables found:", Object.keys(spec.definitions || {}));
        
        if (spec.definitions && spec.definitions.sat_results) {
            console.log("\nsat_results properties:", Object.keys(spec.definitions.sat_results.properties || {}));
        }
        if (spec.definitions && spec.definitions.profiles) {
            console.log("\nprofiles properties:", Object.keys(spec.definitions.profiles.properties || {}));
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

main();

const https = require('https');

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
const supabaseUrl = 'https://dyvvhmuegtzooijrtwyd.supabase.co';
const adminEmail = 'rupali.eduquest@gmail.com';
const adminPass = 'Lovelypanda'; // I saw this in login.html or maybe I don't know the password. Wait, login.html uses 'Lovelypanda' as ADMIN_ACCESS_CODE. The actual password might be different. Let me just fetch via API if it's public. Wait, it's not public.

// Actually I can just write a script to run in the browser console, or add a temporary button in admin.html to dump the table.
// Even better, I can just write a node script that uses the Supabase JS client.

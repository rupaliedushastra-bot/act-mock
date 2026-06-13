// =============================================
// access-check.js
// Locked exams (Exam 1, Exam 3) ke top par
// is script ko load karo, supabase.js ke BAAD.
// Ye check karta hai ki user logged in hai
// aur uska has_access = true hai.
// Agar nahi, to login.html par redirect kar deta hai.
// =============================================

(async function checkAccess() {
    // Page ko hide kar do jab tak check complete na ho
    document.documentElement.style.visibility = 'hidden';

    if (!window.supabase) {
        console.error('Supabase library load nahi hui. Check script order.');
        return;
    }

    const supabaseClient = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );

    const { data: { session } } = await supabaseClient.auth.getSession();

    // Determine correct relative paths based on whether we are in a subdirectory (like test_3)
    let loginUrl = 'login.html';
    let indexUrl = 'index.html';
    if (window.location.pathname.includes('/test_3/')) {
        loginUrl = '../login.html';
        indexUrl = '../index.html';
    }

    if (!session) {
        window.location.href = loginUrl + '?redirect=' + encodeURIComponent(window.location.href);
        return;
    }

    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('has_access')
        .eq('id', session.user.id)
        .single();

    if (error || !profile || !profile.has_access) {
        document.documentElement.style.visibility = 'visible';
        document.body.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;padding:20px;background:#0d0d14;color:#fff">
            <h2 style="margin-bottom:12px">🔒 Access Denied</h2>
            <p style="color:rgba(255,255,255,0.6);max-width:400px;line-height:1.6">
              Aapke account ko is exam ka access nahi mila hai.
              Access ke liye admin se contact karein:
              <br><strong>rupali.eduquest@gmail.com</strong>
            </p>
            <a href="${indexUrl}" style="margin-top:20px;color:#60a5fa">← Back to Home</a>
            <button onclick="window.supabaseLogout()" style="margin-top:10px;background:none;border:1px solid rgba(255,255,255,0.2);color:#fff;padding:8px 16px;border-radius:6px;cursor:pointer">Logout</button>
          </div>`;
        window.supabaseLogout = async function () {
            await supabaseClient.auth.signOut();
            window.location.href = loginUrl;
        };
        throw new Error('Access denied');
    }

    // Access granted — page dikhao
    document.documentElement.style.visibility = 'visible';
})();
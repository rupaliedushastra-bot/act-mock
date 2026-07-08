// ============================================================================
// access-check.js — Universal Security & Access Lock System
// EduQuest Practice Portal (ACT, SAT, SSAT, TMUA, UCAT, AP)
// ============================================================================

(async function checkUniversalAccess() {
    // Hide page content until security check completes
    document.documentElement.style.visibility = 'hidden';

    if (!window.supabase) {
        console.error('❌ Supabase library not loaded before access-check.js.');
        document.documentElement.style.visibility = 'visible';
        return;
    }

    const supabaseClient = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );

    const { data: { session } } = await supabaseClient.auth.getSession();

    // Determine correct relative paths based on directory depth
    const pathname = window.location.pathname.toLowerCase();
    const isFileProtocol = window.location.protocol === 'file:';
    let prefix = '';

    if (pathname.includes('/upper/') || pathname.includes('/middle/') || pathname.includes('/low/') || pathname.includes('/test_3/')) {
        prefix = '../../';
    } else if (
        pathname.includes('/diagnostic/') || 
        pathname.includes('/topic/') || 
        pathname.includes('/act-2/') || 
        pathname.includes('/act-3/') || 
        pathname.includes('/act-diagnostic-') ||
        pathname.includes('/topic-')
    ) {
        prefix = '../';
    } else {
        const pathDepth = (window.location.pathname.match(/\//g) || []).length;
        if (pathDepth >= 3) {
            prefix = '../../';
        } else if (pathDepth === 2) {
            prefix = '../';
        }
    }

    const loginUrl = prefix + 'login.html';
    const indexUrl = prefix + 'index.html';

    if (!session) {
        window.location.href = loginUrl + '?redirect=' + encodeURIComponent(window.location.href);
        return;
    }

    // Super Admin bypass
    const isAdmin = session.user.email === 'rupali.eduquest@gmail.com';

    // Fetch student profile access flags
    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

    let hasAccess = false;
    let requiredLevelName = 'Exam Practice';
    let requestFlagField  = 'access_requested';

    if (profile || isAdmin) {
        if (isAdmin) {
            hasAccess = true;
        } else if (pathname.includes('act-topic') || (pathname.includes('act') && pathname.includes('topic'))) {
            hasAccess = profile?.has_act_topic_access || profile?.has_act_access;
            requiredLevelName = 'ACT Topic Practice';
            requestFlagField  = 'act_topic_access_requested';
        } else if (pathname.includes('act') || pathname.includes('/act/')) {
            hasAccess = profile?.has_act_diag_access || profile?.has_act_access;
            requiredLevelName = 'ACT Practice Test';
            requestFlagField  = 'act_diag_access_requested';
        } else if (pathname.includes('ssat') || pathname.includes('/upper/')) {
            hasAccess = profile?.has_ssat_upper_access || profile?.has_access;
            requiredLevelName = 'SSAT Upper Level';
            requestFlagField  = 'ssat_upper_access_requested';
        } else if (pathname.includes('/middle/')) {
            hasAccess = profile?.has_ssat_middle_access || profile?.has_access;
            requiredLevelName = 'SSAT Middle Level';
            requestFlagField  = 'ssat_middle_access_requested';
        } else if (pathname.includes('/low/') || pathname.includes('elementary')) {
            hasAccess = profile?.has_ssat_low_access || profile?.has_access;
            requiredLevelName = 'SSAT Elementary Level';
            requestFlagField  = 'ssat_low_access_requested';
        } else if (pathname.includes('tmua')) {
            hasAccess = profile?.has_tmua_diag_access || profile?.has_tmua_topic_access || profile?.has_access;
            requiredLevelName = 'TMUA Practice';
            requestFlagField  = 'tmua_access_requested';
        } else if (pathname.includes('ucat')) {
            hasAccess = profile?.has_ucat_access || profile?.has_access;
            requiredLevelName = 'UCAT Practice';
            requestFlagField  = 'ucat_access_requested';
        } else if (pathname.includes('ap')) {
            hasAccess = profile?.has_ap_access || profile?.has_access;
            requiredLevelName = 'AP Practice';
            requestFlagField  = 'ap_access_requested';
        } else if (pathname.includes('topic')) {
            hasAccess = profile?.has_topic_reading_access || profile?.has_topic_math_access || profile?.has_access;
            requiredLevelName = 'SAT Topic Practice';
            requestFlagField  = 'topic_access_requested';
        } else {
            // General SAT Mock or default
            hasAccess = profile?.has_access;
            requiredLevelName = 'SAT Practice Exam';
            requestFlagField  = 'sat_access_requested';
        }
    }

    if (!isAdmin && (error || !profile || !hasAccess)) {
        document.documentElement.style.visibility = 'visible';
        document.body.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:'IBM Plex Sans',sans-serif;text-align:center;padding:24px;background:#0d0d14;color:#fff;">
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);padding:48px 36px;border-radius:24px;max-width:480px;width:100%;box-shadow:0 25px 50px -12px rgba(0,0,0,0.7), 0 0 30px rgba(26,86,219,0.2);backdrop-filter:blur(16px);">
              <div style="font-size:3.5rem;margin-bottom:16px;">🔒</div>
              <h2 style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;margin-bottom:12px;color:#fff;">Access Required</h2>
              <p style="color:#94a3b8;font-size:1rem;line-height:1.6;margin-bottom:24px;">
                Your account currently does not have active authorization to take <strong style="color:#60a5fa;">${requiredLevelName}</strong>.
              </p>
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:16px;border-radius:12px;margin-bottom:28px;font-size:0.85rem;color:#cbd5e1;">
                To unlock this test immediately, click below or contact your admin at:<br>
                <strong style="color:#34d399;font-size:0.95rem;display:inline-block;margin-top:6px;">rupali.eduquest@gmail.com</strong>
              </div>
              <div style="display:flex;flex-direction:column;gap:12px;">
                <button id="btnRequestAccess" onclick="window.requestExamAccess('${requestFlagField}')" style="background:linear-gradient(135deg,#1a56db,#1e429f);border:none;color:#fff;padding:14px;border-radius:12px;font-weight:600;font-size:1rem;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 15px rgba(26,86,219,0.3);">
                  ⚡ Request Access Now
                </button>
                <a href="${indexUrl}" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#fff;padding:12px;border-radius:12px;font-weight:600;text-decoration:none;transition:all 0.2s;">
                  ← Back to Home
                </a>
              </div>
              <button onclick="window.supabaseLogout()" style="margin-top:20px;background:none;border:none;color:#64748b;font-size:0.85rem;cursor:pointer;text-decoration:underline;">
                Sign Out of Account
              </button>
            </div>
          </div>`;

        window.supabaseLogout = async function () {
            await supabaseClient.auth.signOut();
            window.location.href = loginUrl;
        };

        window.requestExamAccess = async function (field) {
            const btn = document.getElementById('btnRequestAccess');
            if (btn) {
                btn.textContent = '⏳ Sending Request...';
                btn.disabled = true;
            }
            try {
                const updateObj = {};
                updateObj[field] = true;
                await supabaseClient.from('profiles').update(updateObj).eq('id', session.user.id);
                if (btn) {
                    btn.style.background = '#059669';
                    btn.textContent = '✅ Request Sent to Admin!';
                }
            } catch (err) {
                console.error('Error requesting access:', err);
                if (btn) {
                    btn.style.background = '#ef4444';
                    btn.textContent = '❌ Failed. Please email admin.';
                }
            }
        };

        throw new Error('Access denied');
    }

    // Access granted -> reveal page
    document.documentElement.style.visibility = 'visible';
})();
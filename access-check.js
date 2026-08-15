// =============================================
// access-check.js – Client Access Verification
// =============================================

(async function checkTestAccess() {
    try {
        if (!window.supabase || typeof SUPABASE_CONFIG === 'undefined' || !SUPABASE_CONFIG.url || SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
            return;
        }

        const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        const { data: { session } } = await client.auth.getSession();
        
        if (!session || !session.user) {
            return;
        }

        const email = (session.user.email || '').toLowerCase();
        if (email === 'rupali.eduquest@gmail.com') {
            return;
        }

        const { data: profile } = await client
            .from('profiles')
            .select('has_access, has_act_access, has_act_diag_access, has_act_topic_access')
            .eq('id', session.user.id)
            .single();

        if (profile) {
            const hasAccess = profile.has_access || profile.has_act_access || profile.has_act_diag_access || profile.has_act_topic_access;
            if (hasAccess) {
                console.log('✅ ACT Test access verified for', email);
            }
        }
    } catch (e) {
        console.warn('Access check warning (non-blocking):', e);
    }
})();

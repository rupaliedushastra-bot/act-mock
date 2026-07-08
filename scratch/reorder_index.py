import re

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the diagnostic card we want to move
diag_card = """      <!-- ACT Diagnostic Test 1 -->
      <div class="exam-card">
        <div class="card-num">D1</div>
        <div class="card-title">ACT Diagnostic Test 1</div>
        <div class="card-sub">3 sections · English, Math & Reading<br>Diagnostic Simulation</div>

        <div class="card-meta">
          <div class="cm">
            <div class="val">131</div>
            <div class="lbl">Questions</div>
          </div>
          <div class="cm">
            <div class="val">125</div>
            <div class="lbl">Minutes</div>
          </div>
          <div class="cm">
            <div class="val">3</div>
            <div class="lbl">Sections</div>
          </div>
          <div class="cm">
            <div class="val">1–36</div>
            <div class="lbl">Score Range</div>
          </div>
        </div>

        <div class="section-chips">
          <div class="s-chip" style="background:rgba(26,86,219,0.1);border:1px solid rgba(26,86,219,0.2)">
            <div class="s-name" style="color:#93c5fd">📝 English</div>
            <div class="s-detail" style="color:rgba(147,197,253,0.7)">50 Qs · 35 min</div>
          </div>
          <div class="s-chip" style="background:rgba(5,150,105,0.1);border:1px solid rgba(5,150,105,0.2)">
            <div class="s-name" style="color:#6ee7b7">🔢 Math</div>
            <div class="s-detail" style="color:rgba(110,231,183,0.7)">45 Qs · 50 min</div>
          </div>
          <div class="s-chip" style="background:rgba(124,58,237,0.1);border:1px solid rgba(124,58,237,0.2)">
            <div class="s-name" style="color:#c4b5fd">📖 Reading</div>
            <div class="s-detail" style="color:rgba(196,181,253,0.7)">36 Qs · 40 min</div>
          </div>
        </div>

        <a href="act-diagnostic-1/act1.html" class="card-btn" id="btn-diag1">Start ACT Diagnostic Test 1 →</a>
      </div>"""

# Remove the card from the top (we need to be careful with formatting/newlines)
# Let's replace the top version with an empty string
content_clean = content.replace(diag_card, "")

# Now find the end of tab-diagnostic div:
# It's right before:
#       <!-- ACT Practice Test 3 -->
#       ...
#         <a href="./act-3/act1.html" class="card-btn" id="btn-act3">Start ACT Practice Test 3 →</a>
#       </div>
#
#     </div>
# Let's search for the block ending the ACT Test 3 card and containing the close div
target_end = """        <a href="./act-3/act1.html" class="card-btn" id="btn-act3">Start ACT Practice Test 3 →</a>
      </div>

    </div>"""

new_end = """        <a href="./act-3/act1.html" class="card-btn" id="btn-act3">Start ACT Practice Test 3 →</a>
      </div>\n\n""" + diag_card + """\n    </div>"""

content_clean = content_clean.replace(target_end, new_end)

# Let's update initIndex javascript to include btn-diag1

# 1. Add const btnDiag
js_decl_old = """      const btn2 = document.getElementById('btn-act2');
      const btn3 = document.getElementById('btn-act3');"""

js_decl_new = """      const btn2 = document.getElementById('btn-act2');
      const btn3 = document.getElementById('btn-act3');
      const btnDiag = document.getElementById('btn-diag1');"""

content_clean = content_clean.replace(js_decl_old, js_decl_new)

# 2. Add !session checks
js_session_old = """      if (!session) {
        if (btn2) {
          btn2.innerHTML = '🔒 Login to Start ACT Practice Test 2 →';
          btn2.href = 'login.html?redirect=act-2/act1.html';
        }
        if (btn3) {
          btn3.innerHTML = '🔒 Login to Start ACT Practice Test 3 →';
          btn3.href = 'login.html?redirect=act-3/act1.html';
        }
        return;
      }"""

js_session_new = """      if (!session) {
        if (btn2) {
          btn2.innerHTML = '🔒 Login to Start ACT Practice Test 2 →';
          btn2.href = 'login.html?redirect=act-2/act1.html';
        }
        if (btn3) {
          btn3.innerHTML = '🔒 Login to Start ACT Practice Test 3 →';
          btn3.href = 'login.html?redirect=act-3/act1.html';
        }
        if (btnDiag) {
          btnDiag.innerHTML = '🔒 Login to Start ACT Diagnostic Test 1 →';
          btnDiag.href = 'login.html?redirect=act-diagnostic-1/act1.html';
        }
        return;
      }"""

content_clean = content_clean.replace(js_session_old, js_session_new)

# 3. Add isAdmin checks
js_admin_old = """      if (isAdmin) {
        if (btn2) { btn2.innerHTML = 'Start ACT Test 2 (Admin) →'; btn2.href = 'act-2/act1.html'; }
        if (btn3) { btn3.innerHTML = 'Start ACT Test 3 (Admin) →'; btn3.href = 'act-3/act1.html'; }
        return;
      }"""

js_admin_new = """      if (isAdmin) {
        if (btn2) { btn2.innerHTML = 'Start ACT Test 2 (Admin) →'; btn2.href = 'act-2/act1.html'; }
        if (btn3) { btn3.innerHTML = 'Start ACT Test 3 (Admin) →'; btn3.href = 'act-3/act1.html'; }
        if (btnDiag) { btnDiag.innerHTML = 'Start ACT Diagnostic Test 1 (Admin) →'; btnDiag.href = 'act-diagnostic-1/act1.html'; }
        return;
      }"""

content_clean = content_clean.replace(js_admin_old, js_admin_new)

# 4. Add profile has_access checks
js_profile_old = """        if (error || !profile || !profile.has_access) {
          if (btn2) {
            btn2.innerHTML = '🔒 Request Access →';
            btn2.href = 'act-2/act1.html';
          }
          if (btn3) {
            btn3.innerHTML = '🔒 Request Access →';
            btn3.href = 'act-3/act1.html';
          }
        } else {
          if (btn2) { btn2.innerHTML = 'Start ACT Practice Test 2 →'; btn2.href = 'act-2/act1.html'; }
          if (btn3) { btn3.innerHTML = 'Start ACT Practice Test 3 →'; btn3.href = 'act-3/act1.html'; }
        }"""

js_profile_new = """        if (error || !profile || !profile.has_access) {
          if (btn2) {
            btn2.innerHTML = '🔒 Request Access →';
            btn2.href = 'act-2/act1.html';
          }
          if (btn3) {
            btn3.innerHTML = '🔒 Request Access →';
            btn3.href = 'act-3/act1.html';
          }
          if (btnDiag) {
            btnDiag.innerHTML = '🔒 Request Access →';
            btnDiag.href = 'act-diagnostic-1/act1.html';
          }
        } else {
          if (btn2) { btn2.innerHTML = 'Start ACT Practice Test 2 →'; btn2.href = 'act-2/act1.html'; }
          if (btn3) { btn3.innerHTML = 'Start ACT Practice Test 3 →'; btn3.href = 'act-3/act1.html'; }
          if (btnDiag) { btnDiag.innerHTML = 'Start ACT Diagnostic Test 1 →'; btnDiag.href = 'act-diagnostic-1/act1.html'; }
        }"""

content_clean = content_clean.replace(js_profile_old, js_profile_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content_clean)

print("Successfully reordered index.html and added javascript hooks.")

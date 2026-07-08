import sys

card = '''
      <!-- ACT Diagnostic Test 1 -->
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
      </div>
'''

content = open('index.html', 'r', encoding='utf-8').read()
content = content.replace('<div class="cards" id="tab-diagnostic">', '<div class="cards" id="tab-diagnostic">\n' + card)
open('index.html', 'w', encoding='utf-8').write(content)
print("Updated index.html")

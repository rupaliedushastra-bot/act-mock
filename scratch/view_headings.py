with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'class="section-title"' in line or 'class="tab-btn"' in line or '<h2>' in line or '<h3>' in line:
        print(f"Line {i+1}: {line.strip()}")

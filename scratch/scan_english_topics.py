import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

# English section: Active/Passive Voice, Transitions, Wordiness/Redundancy, Point of View
for page_num in range(14, 32):
    text = doc[page_num].get_text()
    if any(kw in text for kw in ['Active', 'Passive', 'Transition', 'Redundan', 'Point of View', 'Voice', 'Wordy']):
        lines = [l.strip() for l in text.split('\n') if l.strip()]
        print(f"\n=== PAGE {page_num} ===")
        print('\n'.join(lines[:20]))

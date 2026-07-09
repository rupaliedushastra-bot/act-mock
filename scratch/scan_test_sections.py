import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

for page_num in range(145, len(doc)):
    text = doc[page_num].get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    header = ""
    for line in lines[:8]:
        if "PRACTICE TEST" in line.upper() or "MATHEMATICS" in line.upper() or "READING" in line.upper() or "SCIENCE" in line.upper() or "ANSWER" in line.upper():
            header += f" | {line}"
    if header:
        print(f"Page {page_num}: {header}")

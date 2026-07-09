import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

for page_num in range(182, 193):
    text = doc[page_num].get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    print(f"\n=================== PAGE {page_num} ===================")
    print("\n".join(lines[:15]))

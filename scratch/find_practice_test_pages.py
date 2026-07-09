import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

for page_num in range(130, 145):
    text = doc[page_num].get_text()
    first_few_lines = "\n".join([line.strip() for line in text.split('\n') if line.strip()][:5])
    print(f"Page {page_num} starts with:\n{first_few_lines}\n---")

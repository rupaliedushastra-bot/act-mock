import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

for page_num in range(118, 126):
    print(f"\n=================== PAGE {page_num} ===================")
    print(doc[page_num].get_text())

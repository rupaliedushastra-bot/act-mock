import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

for p in [90, 116, 133]:
    print(f"\n=================== PAGE {p} ===================")
    print(doc[p].get_text())

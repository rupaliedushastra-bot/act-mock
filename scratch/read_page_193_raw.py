import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

page = doc[193]
print("--- Text Blocks on Page 193 ---")
for b in page.get_text("blocks"):
    print(b)

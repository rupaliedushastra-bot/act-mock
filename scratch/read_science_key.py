import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

print("Page 193 (Science Answer Key):")
print(doc[193].get_text())

# Also page 194 if it exists or continues
if len(doc) > 194:
    print("Page 194:")
    print(doc[194].get_text())

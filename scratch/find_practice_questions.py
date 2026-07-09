import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

# Let's search for occurrences of "Practice Problem" or similar
for page_num in range(len(doc)):
    text = doc[page_num].get_text()
    if "Practice Problems" in text or "Practice Problem" in text:
        print(f"Page {page_num} has practice problems/questions.")

import fitz  # PyMuPDF
import sys

pdf_path = "ACT Premium Study Guide with 6 Practice Tests (Barrons Test Prep) (Brian Stewart) (z-lib.org) (1).pdf"

try:
    doc = fitz.open(pdf_path)
    with open("scratch/page53_55.txt", "w", encoding="utf-8") as f:
        for i in range(52, 56):
            page = doc.load_page(i)
            f.write(f"--- PAGE {i+1} ---\n")
            f.write(page.get_text())
            f.write("\n\n")
    print("Done")
except Exception as e:
    print(f"Error: {e}")

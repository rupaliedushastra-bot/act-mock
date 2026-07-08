import fitz  # PyMuPDF
import sys

pdf_path = "ACT Premium Study Guide with 6 Practice Tests (Barrons Test Prep) (Brian Stewart) (z-lib.org) (1).pdf"

try:
    doc = fitz.open(pdf_path)
    print(f"Total pages: {len(doc)}")
    
    # Let's search the first 100 pages to find where the diagnostic test starts
    for i in range(100):
        page = doc.load_page(i)
        text = page.get_text()
        if "Diagnostic" in text and "Test" in text:
            print(f"Found 'Diagnostic Test' on page {i+1}")
            # print a snippet
            # print(text[:500])
            
except Exception as e:
    print(f"Error: {e}")

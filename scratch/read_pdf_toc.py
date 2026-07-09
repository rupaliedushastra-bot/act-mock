import fitz # PyMuPDF

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")

toc = doc.get_toc()
if toc:
    print("Table of Contents:")
    for item in toc:
        print(item)
else:
    print("No TOC found. Let's search for potential headings in the first 20 pages and check page ranges.")
    # Print some info about text in the document
    for page_num in range(min(15, len(doc))):
        text = doc[page_num].get_text()
        print(f"--- Page {page_num} ---")
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        for line in lines[:10]:
            print(line)

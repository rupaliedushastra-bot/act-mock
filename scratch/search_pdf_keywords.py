import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

# Let's search for keywords in each page and report page numbers
keywords = ["PRACTICE TEST", "PART II", "ANSWERS AND EXPLANATIONS", "SCIENCE", "WRITING", "MATH"]
results = {k: [] for k in keywords}

for page_num in range(len(doc)):
    text = doc[page_num].get_text().upper()
    for k in keywords:
        if k in text:
            results[k].append(page_num)

for k, pages in results.items():
    print(f"Keyword '{k}' found in pages: {pages[:20]} ... (total {len(pages)} pages)")

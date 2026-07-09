import fitz

pdf_path = "ACT Prep Book 2016 by Accepted Inc. ACT Test Prep Study Guide and Practice Questions (ACT Test Prep Team) (z-library.sk, 1lib.sk, z-lib.sk).pdf"
doc = fitz.open(pdf_path)

# Let's search for "biodiesel" or "Lemaitre" or "Hoyle"
for page_num in range(len(doc)):
    text = doc[page_num].get_text().lower()
    if "biodiesel" in text:
        print(f"Page {page_num} mentions biodiesel")
    if "lemaitre" in text:
        print(f"Page {page_num} mentions Lemaitre")

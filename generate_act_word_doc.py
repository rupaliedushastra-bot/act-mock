import os
import json
import time
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>'))

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_document():
    print("Loading extracted questions data...")
    with open('all_questions_dump.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    doc = docx.Document()

    # Page Margins (0.75 in)
    for section in doc.sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Styles
    normal_style = doc.styles['Normal']
    normal_font = normal_style.font
    normal_font.name = 'Calibri'
    normal_font.size = Pt(10.5)
    normal_font.color.rgb = RGBColor(30, 41, 59) # Slate 800

    # Colors
    c_navy = RGBColor(15, 23, 42)       # Slate 900
    c_blue = RGBColor(30, 58, 138)      # Blue 900
    c_royal = RGBColor(37, 99, 235)     # Blue 600
    c_green = RGBColor(22, 101, 52)     # Emerald 800
    c_muted = RGBColor(71, 85, 105)     # Slate 600
    c_gray = RGBColor(100, 116, 139)    # Slate 500

    # ==========================================
    # 1. COVER / TITLE PAGE
    # ==========================================
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(36)
    p_title.paragraph_format.space_after = Pt(6)
    run_title = p_title.add_run("ACT MASTER QUESTION BANK & ANSWER KEY")
    run_title.font.name = 'Calibri'
    run_title.font.size = Pt(24)
    run_title.font.bold = True
    run_title.font.color.rgb = c_blue

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(20)
    run_sub = p_sub.add_run("Complete Collection of Questions, Options, Correct Answers, Explanations & Topics")
    run_sub.font.size = Pt(13)
    run_sub.font.italic = True
    run_sub.font.color.rgb = c_muted

    # Overview Info Table
    summary_table = doc.add_table(rows=5, cols=2)
    summary_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    summary_data = [
        ("Total Practice & Diagnostic Tests", f"{data['totalTests']} Tests (3 Full Practice, 12 Diagnostics, 24 Topic Tests)"),
        ("Total Questions Included", f"{data['totalQuestions']:,} Questions (100% with Answer Key & Explanations)"),
        ("Sections Covered", "English (910 Qs) • Mathematics (875 Qs) • Reading (660 Qs)"),
        ("Total Topics Covered", f"{len(data['topicCounts'])} Curriculum Topics"),
        ("Project Source Repository", "ACT Test Portal (Act_test)")
    ]

    for idx, (label, val) in enumerate(summary_data):
        row = summary_table.rows[idx]
        cell_lbl, cell_val = row.cells[0], row.cells[1]
        
        cell_lbl.width = Inches(2.8)
        cell_val.width = Inches(4.2)
        
        p0 = cell_lbl.paragraphs[0]
        p0.paragraph_format.space_before = Pt(3)
        p0.paragraph_format.space_after = Pt(3)
        r0 = p0.add_run(label)
        r0.bold = True
        r0.font.color.rgb = c_blue
        
        p1 = cell_val.paragraphs[0]
        p1.paragraph_format.space_before = Pt(3)
        p1.paragraph_format.space_after = Pt(3)
        r1 = p1.add_run(val)
        r1.font.color.rgb = c_navy
        
        bg = "F1F5F9" if idx % 2 == 0 else "FFFFFF"
        set_cell_background(cell_lbl, bg)
        set_cell_background(cell_val, bg)
        set_cell_margins(cell_lbl, top=80, bottom=80, left=120, right=120)
        set_cell_margins(cell_val, top=80, bottom=80, left=120, right=120)

    doc.add_paragraph().paragraph_format.space_after = Pt(16)

    # ==========================================
    # 2. TOPICS BREAKDOWN DIRECTORY
    # ==========================================
    p_toph = doc.add_heading(level=1)
    p_toph.paragraph_format.space_before = Pt(18)
    p_toph.paragraph_format.space_after = Pt(6)
    r_toph = p_toph.add_run("Curriculum Topics Directory (25 Topics)")
    r_toph.font.color.rgb = c_blue

    p_topdesc = doc.add_paragraph()
    p_topdesc.paragraph_format.space_after = Pt(8)
    p_topdesc.add_run("The table below details all 25 curriculum topics present in this repository, the primary sections they belong to, and their total question count across all tests:")

    # Topic table
    topics_sorted = sorted(data['topicCounts'].items(), key=lambda x: x[0])
    topic_table = doc.add_table(rows=len(topics_sorted) + 1, cols=4)
    topic_table.alignment = WD_TABLE_ALIGNMENT.CENTER

    headers = ["#", "Topic Name", "Primary Section", "Total Questions"]
    widths = [Inches(0.6), Inches(3.2), Inches(1.8), Inches(1.4)]

    # Header Row
    for c_idx, title in enumerate(headers):
        cell = topic_table.rows[0].cells[c_idx]
        cell.width = widths[c_idx]
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(4)
        p.paragraph_format.space_after = Pt(4)
        r = p.add_run(title)
        r.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        set_cell_background(cell, "1E3A8A") # Navy Blue
        set_cell_margins(cell, top=100, bottom=100, left=100, right=100)

    # Topic Rows
    topic_sec_map = {
        'Active & Passive Voice': 'English',
        'Grammar & Usage': 'English',
        'Point of View Consistency': 'English',
        'Punctuation': 'English',
        'Rhetorical Skills': 'English & Reading',
        'Sentence Structure': 'English',
        'Style & Tone': 'English & Reading',
        'Transitions': 'English',
        'Wordiness & Redundancy': 'English',
        'Coordinate Geometry': 'Math',
        'Elementary Algebra': 'Math',
        'Exponents & Radicals': 'Math',
        'Intermediate Algebra': 'Math',
        'Percentages': 'Math',
        'Plane Geometry': 'Math',
        'Pre-Algebra': 'Math',
        'Ratios & Proportions': 'Math',
        'Statistics & Probability': 'Math',
        'Trigonometry': 'Math',
        'Humanities': 'Reading',
        'Inference': 'Reading',
        'Literary Narrative': 'Reading',
        'Main Idea': 'Reading',
        'Natural Science': 'Reading',
        'Social Science': 'Reading'
    }

    for idx, (tname, count) in enumerate(topics_sorted):
        row = topic_table.rows[idx + 1]
        sec_name = topic_sec_map.get(tname, 'General')
        cols = [str(idx + 1), tname, sec_name, str(count)]
        bg = "F8FAFC" if idx % 2 == 0 else "FFFFFF"

        for c_idx, val in enumerate(cols):
            cell = row.cells[c_idx]
            cell.width = widths[c_idx]
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(3)
            p.paragraph_format.space_after = Pt(3)
            r = p.add_run(val)
            if c_idx == 1:
                r.bold = True
            if c_idx == 3:
                r.bold = True
                p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=80, right=80)

    doc.add_page_break()

    # ==========================================
    # 3. TESTS DIRECTORY TABLE
    # ==========================================
    p_testh = doc.add_heading(level=1)
    p_testh.paragraph_format.space_before = Pt(12)
    p_testh.paragraph_format.space_after = Pt(6)
    r_testh = p_testh.add_run("Project Tests Directory (39 Tests)")
    r_testh.font.color.rgb = c_blue

    test_table = doc.add_table(rows=len(data['tests']) + 1, cols=5)
    test_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    test_headers = ["#", "Test Name", "Test Type", "Sections Included", "Questions"]
    t_widths = [Inches(0.5), Inches(2.6), Inches(1.5), Inches(1.6), Inches(0.8)]

    for c_idx, title in enumerate(test_headers):
        cell = test_table.rows[0].cells[c_idx]
        cell.width = t_widths[c_idx]
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(4)
        p.paragraph_format.space_after = Pt(4)
        r = p.add_run(title)
        r.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        set_cell_background(cell, "1E3A8A")
        set_cell_margins(cell, top=80, bottom=80, left=80, right=80)

    for idx, t in enumerate(data['tests']):
        row = test_table.rows[idx + 1]
        
        # Determine sections
        s_counts = {}
        for q in t['questions']:
            s_counts[q.get('section', 'other')] = s_counts.get(q.get('section', 'other'), 0) + 1
        s_summary = ", ".join([f"{k.capitalize()}: {v}" for k, v in s_counts.items()])
        
        cols = [str(idx + 1), t['testTitle'], t['testType'], s_summary, str(t['questionCount'])]
        bg = "F8FAFC" if idx % 2 == 0 else "FFFFFF"

        for c_idx, val in enumerate(cols):
            cell = row.cells[c_idx]
            cell.width = t_widths[c_idx]
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(3)
            p.paragraph_format.space_after = Pt(3)
            r = p.add_run(val)
            if c_idx == 1:
                r.bold = True
            if c_idx == 4:
                r.bold = True
                p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=50, bottom=50, left=60, right=60)

    doc.add_page_break()

    # ==========================================
    # 4. QUESTION BANK (ALL 39 TESTS, 2,445 QUESTIONS)
    # ==========================================
    print("Writing 2,445 questions into Word document...")
    total_written = 0

    option_letters = ['A', 'B', 'C', 'D', 'E']

    current_major_part = ""

    for test_idx, t in enumerate(data['tests']):
        # Major Part Header
        if t['testType'] != current_major_part:
            current_major_part = t['testType']
            p_part = doc.add_heading(level=1)
            p_part.paragraph_format.space_before = Pt(24)
            p_part.paragraph_format.space_after = Pt(8)
            r_part = p_part.add_run(f"PART: {current_major_part.upper()}S")
            r_part.font.size = Pt(20)
            r_part.font.bold = True
            r_part.font.color.rgb = c_navy

        # Test Heading
        p_th = doc.add_heading(level=2)
        p_th.paragraph_format.space_before = Pt(16)
        p_th.paragraph_format.space_after = Pt(4)
        r_th = p_th.add_run(f"Test #{test_idx + 1}: {t['testTitle']} ({t['questionCount']} Questions)")
        r_th.font.size = Pt(14)
        r_th.font.bold = True
        r_th.font.color.rgb = c_blue

        p_tinfo = doc.add_paragraph()
        p_tinfo.paragraph_format.space_after = Pt(12)
        r_tinfo = p_tinfo.add_run(f"Type: {t['testType']} | Source File: {t['testPath']}")
        r_tinfo.font.italic = True
        r_tinfo.font.color.rgb = c_muted

        # Track passages inside a test to avoid redundant massive printouts if consecutive
        last_passage_printed = None

        current_section = ""

        for q_idx, q in enumerate(t['questions']):
            total_written += 1
            sec = q.get('section', '').capitalize()
            topic = q.get('topic', 'General')
            qid = q.get('id', q_idx + 1)

            # Section sub-header if changed
            if sec != current_section:
                current_section = sec
                p_sec = doc.add_paragraph()
                p_sec.paragraph_format.space_before = Pt(12)
                p_sec.paragraph_format.space_after = Pt(4)
                r_sec = p_sec.add_run(f"--- Section: {current_section} ---")
                r_sec.font.bold = True
                r_sec.font.color.rgb = c_royal

            # Question Header Line
            p_qh = doc.add_paragraph()
            p_qh.paragraph_format.space_before = Pt(8)
            p_qh.paragraph_format.space_after = Pt(2)
            
            r_qnum = p_qh.add_run(f"Q{q_idx + 1}. [ID: {qid}] ")
            r_qnum.font.bold = True
            r_qnum.font.color.rgb = c_navy

            r_qtopic = p_qh.add_run(f"[{sec} | Topic: {topic}]")
            r_qtopic.font.bold = True
            r_qtopic.font.color.rgb = c_blue

            # Passage (if present)
            passage = q.get('passage', '').strip()
            if passage:
                # If passage is different from last printed, print full passage
                if passage != last_passage_printed:
                    last_passage_printed = passage
                    p_pgh = doc.add_paragraph()
                    p_pgh.paragraph_format.space_before = Pt(4)
                    p_pgh.paragraph_format.space_after = Pt(2)
                    p_pgh.paragraph_format.left_indent = Inches(0.25)
                    r_pgh = p_pgh.add_run("📖 PASSAGE:")
                    r_pgh.font.bold = True
                    r_pgh.font.color.rgb = c_blue

                    p_pg = doc.add_paragraph()
                    p_pg.paragraph_format.space_before = Pt(2)
                    p_pg.paragraph_format.space_after = Pt(4)
                    p_pg.paragraph_format.left_indent = Inches(0.25)
                    r_pg = p_pg.add_run(passage)
                    r_pg.font.size = Pt(9.5)
                    r_pg.font.color.rgb = c_muted
                else:
                    # Same passage as preceding question
                    p_pgh = doc.add_paragraph()
                    p_pgh.paragraph_format.space_before = Pt(2)
                    p_pgh.paragraph_format.space_after = Pt(2)
                    p_pgh.paragraph_format.left_indent = Inches(0.25)
                    p_pgh.add_run("📖 [Refer to above Passage]").font.italic = True

            # Question Text
            q_text = q.get('text', '').strip()
            p_text = doc.add_paragraph()
            p_text.paragraph_format.space_before = Pt(2)
            p_text.paragraph_format.space_after = Pt(4)
            r_text = p_text.add_run(q_text)
            r_text.font.size = Pt(10.5)

            # Options
            options = q.get('options', [])
            ans_idx = q.get('answer', 0)

            for opt_i, opt_text in enumerate(options):
                opt_letter = option_letters[opt_i] if opt_i < len(option_letters) else str(opt_i + 1)
                p_opt = doc.add_paragraph()
                p_opt.paragraph_format.left_indent = Inches(0.2)
                p_opt.paragraph_format.space_before = Pt(1)
                p_opt.paragraph_format.space_after = Pt(1)
                
                is_correct = (opt_i == ans_idx)
                
                r_opt_lbl = p_opt.add_run(f"({opt_letter}) ")
                r_opt_lbl.font.bold = True
                
                r_opt_val = p_opt.add_run(str(opt_text))
                if is_correct:
                    r_opt_lbl.font.color.rgb = c_green
                    r_opt_val.font.bold = True
                    r_opt_val.font.color.rgb = c_green
                    r_tag = p_opt.add_run("  ✓ [CORRECT]")
                    r_tag.font.bold = True
                    r_tag.font.color.rgb = c_green
                else:
                    r_opt_lbl.font.color.rgb = c_navy
                    r_opt_val.font.color.rgb = c_navy

            # Correct Answer Summary Line
            correct_letter = option_letters[ans_idx] if ans_idx < len(option_letters) else str(ans_idx + 1)
            correct_val = options[ans_idx] if 0 <= ans_idx < len(options) else "N/A"
            
            p_ans = doc.add_paragraph()
            p_ans.paragraph_format.space_before = Pt(3)
            p_ans.paragraph_format.space_after = Pt(1)
            
            r_ans_lbl = p_ans.add_run("Correct Answer: ")
            r_ans_lbl.font.bold = True
            r_ans_lbl.font.color.rgb = c_green
            
            r_ans_val = p_ans.add_run(f"Option ({correct_letter}) — {correct_val}")
            r_ans_val.font.bold = True
            r_ans_val.font.color.rgb = c_green

            # Explanation
            explanation = q.get('explanation', '').strip()
            if explanation:
                p_exp = doc.add_paragraph()
                p_exp.paragraph_format.space_before = Pt(1)
                p_exp.paragraph_format.space_after = Pt(8)
                
                r_exp_lbl = p_exp.add_run("Explanation: ")
                r_exp_lbl.font.bold = True
                r_exp_lbl.font.italic = True
                r_exp_lbl.font.color.rgb = c_muted
                
                r_exp_val = p_exp.add_run(explanation)
                r_exp_val.font.italic = True
                r_exp_val.font.color.rgb = c_muted
            else:
                p_ans.paragraph_format.space_after = Pt(8)

        print(f"Processed test {test_idx + 1}/{len(data['tests'])}: {t['testTitle']} ({t['questionCount']} Qs). Total so far: {total_written}")

    # Output filename
    output_filename = "ACT_Complete_Question_Bank_and_Answers.docx"
    print(f"Saving Word document to {output_filename}...")
    t0 = time.time()
    doc.save(output_filename)
    t1 = time.time()
    
    file_size_mb = os.path.getsize(output_filename) / (1024 * 1024)
    print(f"SUCCESS! Saved {output_filename} ({file_size_mb:.2f} MB) in {t1 - t0:.2f} seconds.")
    print(f"Total questions written: {total_written}")

if __name__ == '__main__':
    create_document()

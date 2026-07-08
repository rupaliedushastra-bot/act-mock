import json
import re

with open('act-diagnostic-4/act_questions1.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Locate the start of the JSON array
prefix = "const ACT_QUESTIONS1 = "
start_idx = js_content.find(prefix)
config_idx = js_content.find("// ── ACT Section Configuration ──")

array_str = js_content[start_idx + len(prefix):config_idx].strip()
if array_str.endswith(';'):
    array_str = array_str[:-1].strip()

questions = json.loads(array_str)
math_qs = [q for q in questions if q['section'] == 'math']

with open('scratch/math_questions_list.txt', 'w', encoding='utf-8') as out:
    for idx, q in enumerate(math_qs):
        out.write(f"Index: {idx+1} (ID {q['id']}):\n")
        out.write(f"Text: {q['text']}\n")
        out.write(f"Options: {q['options']}\n")
        out.write(f"Answer index: {q['answer']} (Letter: {['A','B','C','D','E','F','G','H','J','K'][q['answer']] if q['answer'] < 10 else q['answer']})\n")
        out.write("-" * 50 + "\n")

print("Successfully wrote scratch/math_questions_list.txt!")

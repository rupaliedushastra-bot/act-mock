import re
import json

path = "act-diagnostic-9/act_questions1.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Match the ACT_QUESTIONS1 array
match = re.search(r"const ACT_QUESTIONS1 = (\[.*\]);", content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    print(f"Total questions: {len(data)}")
    sections = {}
    for q in data:
        sec = q.get("section")
        sections[sec] = sections.get(sec, 0) + 1
    print("Sections:", sections)
else:
    # Try finding the array inside JS variable (or just parse it using a quick regex)
    print("Not directly matching via json.loads, let's evaluate with python/node or standard regex")

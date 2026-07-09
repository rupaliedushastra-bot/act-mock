import re
import json
import glob
import os

files = sorted(glob.glob("act-diagnostic-*/act_questions1.js"))
for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    match = re.search(r"const ACT_QUESTIONS1 = (\[.*\]);", content, re.DOTALL)
    if match:
        try:
            data = json.loads(match.group(1))
            sections = {}
            for q in data:
                sec = q.get("section")
                sections[sec] = sections.get(sec, 0) + 1
            print(f"{os.path.dirname(f)}: Total: {len(data)} | Sections: {sections}")
        except Exception as e:
            print(f"{os.path.dirname(f)}: Error parsing json: {e}")
    else:
        print(f"{os.path.dirname(f)}: No match found")

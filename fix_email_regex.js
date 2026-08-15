const fs = require('fs');
const path = require('path');

function fixStartTestInFile(filePath) {
    let code = fs.readFileSync(filePath, 'utf8');

    const oldStartTestRegex = /function startTest\(\)\s*\{[\s\S]*?\n        \}/;

    const newStartTestCode = `function startTest() {
            try {
                const nameEl = document.getElementById('regName');
                const emailEl = document.getElementById('regEmail');
                const ccEl = document.getElementById('regCountryCode');
                const phoneEl = document.getElementById('regPhone');
                const msg = document.getElementById('regMsg');

                const name = nameEl ? nameEl.value.trim() : '';
                const email = emailEl ? emailEl.value.trim() : '';
                const cc = ccEl ? ccEl.value : '';
                const phone = phoneEl ? phoneEl.value.trim() : '';

                if (!name || !email || !phone) {
                    if (msg) msg.textContent = 'Please fill all fields.';
                    return;
                }
                if (!email || !email.includes('@')) {
                    if (msg) msg.textContent = 'Enter a valid email.';
                    return;
                }

                studentInfo = { name, email, phone: cc + phone, startTime: new Date().toISOString() };
                testStartTime = studentInfo.startTime;

                try {
                    localStorage.setItem('student_email', email);
                    if (!localStorage.getItem('user_email')) {
                        localStorage.setItem('user_email', email);
                    }
                } catch (e) {}

                try {
                    if (typeof saveRegistration === 'function') {
                        saveRegistration(studentInfo, typeof EXAM_TITLE !== 'undefined' ? EXAM_TITLE : 'ACT Practice Test');
                    }
                } catch (e) {
                    console.error("saveRegistration error:", e);
                }

                const regScreen = document.getElementById('regScreen');
                const testScreen = document.getElementById('testScreen');
                if (regScreen) regScreen.style.display = 'none';
                if (testScreen) {
                    testScreen.style.display = 'flex';
                    testScreen.style.flexDirection = 'column';
                }

                if (typeof renderQuestion === 'function') renderQuestion();
                if (typeof renderPalette === 'function') renderPalette();
                if (typeof startSectionTimer === 'function') startSectionTimer(typeof currentSection !== 'undefined' ? currentSection : 'english');
            } catch (err) {
                console.error("startTest error:", err);
                const regScreen = document.getElementById('regScreen');
                const testScreen = document.getElementById('testScreen');
                if (regScreen) regScreen.style.display = 'none';
                if (testScreen) {
                    testScreen.style.display = 'flex';
                    testScreen.style.flexDirection = 'column';
                }
            }
        }`;

    if (oldStartTestRegex.test(code)) {
        code = code.replace(oldStartTestRegex, newStartTestCode);
        fs.writeFileSync(filePath, code);
        console.log('Updated startTest in:', filePath);
    }
}

function findFiles(dir) {
    const results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                results.push(...findFiles(fullPath));
            }
        } else {
            if (file === 'act1.html' || file === 'test.html') {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = findFiles('.');
files.forEach(fixStartTestInFile);
console.log('All startTest functions updated with clean email check!');

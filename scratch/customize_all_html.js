const fs = require('fs');

function customize(filePath, fromNum, toNum) {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Replace title
    html = html.replace(new RegExp(`ACT Practice Test ${fromNum}`, 'g'), `ACT Practice Test ${toNum}`);
    html = html.replace(new RegExp(`Test ${fromNum}`, 'g'), `Test ${toNum}`);
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Customized ${filePath} from Test ${fromNum} to Test ${toNum}.`);
}

customize('act-diagnostic-10/act1.html', 11, 13);
customize('act-diagnostic-11/act1.html', 12, 14);
customize('act-diagnostic-12/act1.html', 6, 15);

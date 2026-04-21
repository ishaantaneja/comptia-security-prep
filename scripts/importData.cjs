const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const studyMaterialDir = path.join(__dirname, '..', 'study-material');

async function extractPracticeTest(filename) {
    const filePath = path.join(studyMaterialDir, filename);
    if (!fs.existsSync(filePath)) {
        console.error("File not found:", filePath);
        return;
    }
    
    let dataBuffer = fs.readFileSync(filePath);
    try {
        const data = await pdf(dataBuffer);
        console.log("--- Extracted Text Preview ---");
        console.log(data.text.substring(0, 2000));
        console.log("------------------------------");
        
        fs.writeFileSync(path.join(__dirname, 'preview.txt'), data.text.substring(0, 10000));
        console.log("Wrote preview to scripts/preview.txt");
    } catch (err) {
        console.error("Error parsing PDF:", err);
    }
}

extractPracticeTest('SY0-701_practice_test.pdf');

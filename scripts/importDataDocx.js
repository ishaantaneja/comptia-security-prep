import fs from 'fs';
import mammoth from 'mammoth';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studyMaterialDir = path.join(__dirname, '..', 'study-material');

async function extractPracticeTest(filename) {
    const filePath = path.join(studyMaterialDir, filename);
    if (!fs.existsSync(filePath)) {
        console.error("File not found:", filePath);
        return;
    }
    
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        const text = result.value;
        console.log("--- Extracted Text Preview ---");
        console.log(text.substring(0, 2000));
        console.log("------------------------------");
        
        fs.writeFileSync(path.join(__dirname, 'preview.txt'), text.substring(0, 10000));
        console.log("Wrote preview to scripts/preview.txt");
    } catch (err) {
        console.error("Error parsing DOCX:", err);
    }
}

extractPracticeTest('Security+ questions Set 2.docx');

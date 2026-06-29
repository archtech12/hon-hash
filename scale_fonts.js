const fs = require('fs');
const path = require('path');

function scaleFontSizes(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    let original = content;

    content = content.replace(/style=\{\{\s*fontSize:\s*'([0-9.]+)px'([^\}]*)\}\}/g, (match, val, rest) => {
        const scaled = (parseFloat(val) * 1.963636).toFixed(1);
        return `style={{ fontSize: '${scaled}px'${rest}}}`;
    });

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log('Scaled fonts in:', path.basename(filepath));
    }
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkSync(filepath);
        } else if (filepath.endsWith('.tsx')) {
            scaleFontSizes(filepath);
        }
    }
}

walkSync(path.join('c:', 'Users', 'lenovo', 'hon-hash-main', 'app', '(personal)', 'sticker-generator', 'components', 'templates'));

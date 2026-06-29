const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app/(personal)/sticker-generator/components/templates');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match style={{ fontSize: 'Xpx' }}
    // and replace with style={{ fontSize: 'Ycqw' }}
    const pxRegex = /style=\{\{\s*fontSize:\s*'([0-9.]+)px'\s*\}\}/g;
    
    let changed = false;
    let newContent = content.replace(pxRegex, (match, pxValue) => {
        const px = parseFloat(pxValue);
        const cqw = (px / 10.8).toFixed(2);
        // Remove trailing zeros
        const cleanCqw = parseFloat(cqw).toString();
        changed = true;
        return `style={{ fontSize: '${cleanCqw}cqw' }}`;
    });
    
    // Let's also restore line-height constraints where necessary? No, leading-tight is better than line-clamp.
    
    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Reverted: ${path.basename(filePath)}`);
    }
}

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        processFile(path.join(dir, file));
    }
});

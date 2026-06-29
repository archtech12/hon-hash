const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app/(personal)/sticker-generator/components/templates');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match fontSize: 'Xpx' anywhere
    const pxRegex = /fontSize:\s*'([0-9.]+)px'/g;
    
    let changed = false;
    let newContent = content.replace(pxRegex, (match, pxValue) => {
        const px = parseFloat(pxValue);
        const cqw = (px / 10.8).toFixed(2);
        const cleanCqw = parseFloat(cqw).toString();
        changed = true;
        return `fontSize: '${cleanCqw}cqw'`;
    });
    
    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Reverted fonts in: ${path.basename(filePath)}`);
    }
}

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        processFile(path.join(dir, file));
    }
});

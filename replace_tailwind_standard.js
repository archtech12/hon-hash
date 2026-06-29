const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app/(personal)/sticker-generator/components/templates');

const sizeMap = {
    'xs': '1.11cqw',
    'sm': '1.3cqw',
    'base': '1.48cqw',
    'lg': '1.67cqw',
    'xl': '1.85cqw',
    '2xl': '2.22cqw',
    '3xl': '2.78cqw',
    '4xl': '3.33cqw',
    '5xl': '4.44cqw',
    '6xl': '5.56cqw',
    '7xl': '6.67cqw',
    '8xl': '8.89cqw',
    '9xl': '11.85cqw'
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match text-xs, text-sm, etc. with word boundaries, taking care not to match things like "text-white"
    const regex = /\btext-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/g;
    
    let changed = false;
    let newContent = content.replace(regex, (match, size) => {
        if (sizeMap[size]) {
            changed = true;
            return `text-[${sizeMap[size]}]`;
        }
        return match;
    });
    
    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Replaced fixed text classes in: ${path.basename(filePath)}`);
    }
}

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        processFile(path.join(dir, file));
    }
});

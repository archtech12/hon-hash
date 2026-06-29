const fs = require('fs');
const path = require('path');

function removeGrayscale(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Remove variations of grayscale
    let newContent = content.replace(/\b(filter )?grayscale(?:-\[\d+%\])?\b/g, '');
    newContent = newContent.replace(/\b(hover|group-hover):grayscale(?:-0)?\b/g, '');
    
    // Clean up multiple spaces, but don't mess up intentional indentation
    // We will only clean up spaces within class strings (roughly)
    // Actually, just replacing '  ' with ' ' inside className="..." is safer,
    // but a simple regex is fine:
    newContent = newContent.replace(/className="([^"]*?)\s{2,}([^"]*?)"/g, (match, p1, p2) => `className="${p1} ${p2}"`);
    
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log('Updated:', filepath);
    }
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkSync(filepath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            removeGrayscale(filepath);
        }
    }
}

walkSync(path.join('c:', 'Users', 'lenovo', 'hon-hash-main', 'app'));
walkSync(path.join('c:', 'Users', 'lenovo', 'hon-hash-main', 'components'));

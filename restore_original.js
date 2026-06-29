const fs = require('fs');

const stripLineNumbersAndSave = (inputFile, outputFile) => {
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  
  let actualLines = [];
  let isCode = false;
  
  for (let l of lines) {
    if (l.includes('The following code has been modified')) {
      isCode = true;
      continue;
    }
    if (l.includes('The above content shows the entire')) {
      break;
    }
    
    if (isCode) {
      // Line numbers format: '1: import { TemplateProps...'
      const match = l.match(/^\d+:\s?(.*)$/);
      if (match) {
        actualLines.push(match[1]);
      } else {
        actualLines.push(l);
      }
    }
  }
  
  if (actualLines.length > 0) {
    fs.writeFileSync(outputFile, actualLines.join('\n'));
    console.log(`Saved restored content to ${outputFile}`);
  } else {
    console.log(`Failed to parse ${inputFile}`);
  }
}

stripLineNumbersAndSave('print_premium_original.txt', 'app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx');
stripLineNumbersAndSave('badge_premium_original.txt', 'app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx');

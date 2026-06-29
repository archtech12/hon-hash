const fs = require('fs');

const extractFirstOccurrence = (fileName, outputFile) => {
  const logPath = 'C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\07b03bdc-6f85-4362-82bf-bf7c23a6ab24\\.system_generated\\logs\\transcript_full.jsonl';
  const lines = fs.readFileSync(logPath, 'utf8').split('\n');
  
  for (let l of lines) {
    if (!l) continue;
    if (l.includes(fileName)) {
      try {
        const obj = JSON.parse(l);
        if (obj.tool_calls) {
          for (let tc of obj.tool_calls) {
            // Depending on the format, it might be tc.function.name or tc.name
            const name = tc.function ? tc.function.name : tc.name;
            const args = tc.function ? tc.function.arguments : tc.arguments;
            
            if (name === 'default_api:replace_file_content' && args && typeof args === 'string' && args.includes(fileName)) {
              const parsedArgs = JSON.parse(args);
              if (parsedArgs.TargetContent) {
                console.log(`Found original TargetContent for ${fileName}`);
                fs.writeFileSync(outputFile, parsedArgs.TargetContent);
                return;
              }
            }
            if (name === 'default_api:write_to_file' && args && typeof args === 'string' && args.includes(fileName)) {
               const parsedArgs = JSON.parse(args);
               if (parsedArgs.CodeContent) {
                 console.log(`Found original CodeContent for ${fileName}`);
                 fs.writeFileSync(outputFile, parsedArgs.CodeContent);
                 return;
               }
            }
          }
        }
        
        // Also check if it's a response to view_file
        if (obj.content && typeof obj.content === 'string' && obj.content.includes(fileName) && obj.content.includes('The following code has been modified to include a line number before every line')) {
           console.log(`Found view_file output for ${fileName}`);
           fs.writeFileSync(outputFile, obj.content);
           return;
        }

      } catch (e) {
        // ignore JSON parse errors
      }
    }
  }
  console.log(`Could not find ${fileName} in transcript`);
};

extractFirstOccurrence('PrintPremiumTemplate.tsx', 'print_premium_original.txt');
extractFirstOccurrence('BadgePremiumTemplate.tsx', 'badge_premium_original.txt');

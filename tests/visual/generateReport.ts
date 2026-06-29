import fs from 'fs';
import path from 'path';
import { templates, OUTPUT_DIR } from './helpers';

async function generate() {
    const resultsPath = path.join(OUTPUT_DIR, 'results.json');
    let results: Record<string, any> = {};
    if (fs.existsSync(resultsPath)) {
        results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    }

    let html = `
    <html>
    <head>
        <title>Visual QA Report</title>
        <style>
            body { font-family: system-ui; background: #0f172a; color: #f8fafc; padding: 2rem; }
            .template-card { background: #1e293b; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid #334155; }
            .status-pass { color: #4ade80; font-weight: bold; }
            .status-fail { color: #f87171; font-weight: bold; }
            .images { display: flex; gap: 1rem; margin-top: 1rem; overflow-x: auto; }
            .image-col { flex: 1; min-width: 300px; }
            .image-col img { width: 100%; height: auto; border: 1px solid #475569; border-radius: 8px; }
            .issues { color: #f87171; margin-top: 1rem; }
        </style>
    </head>
    <body>
        <h1>Sticker Generator Visual QA Report</h1>
    `;

    for (const template of templates) {
        const safeName = template.replace(/ /g, '_');
        const data = results[template] || { score: 0, issues: ['Test not run'] };
        const passed = data.score >= 95;
        
        html += `
        <div class="template-card">
            <h2>${template} - Score: ${data.score}/100 <span class="${passed ? 'status-pass' : 'status-fail'}">(${passed ? 'PASS' : 'FAIL'})</span></h2>
            ${data.issues.length > 0 ? `<div class="issues"><strong>Issues:</strong> <ul>${data.issues.map((i: string) => `<li>${i}</li>`).join('')}</ul></div>` : ''}
            <div class="images">
                <div class="image-col">
                    <h3>Preview</h3>
                    <img src="./${safeName}_preview.png" loading="lazy" onerror="this.style.display='none'" />
                </div>
                <div class="image-col">
                    <h3>Export</h3>
                    <img src="./${safeName}_export.png" loading="lazy" onerror="this.style.display='none'" />
                </div>
                <div class="image-col">
                    <h3>Diff</h3>
                    <img src="./${safeName}_diff.png" loading="lazy" onerror="this.style.display='none'" />
                </div>
            </div>
        </div>
        `;
    }

    html += `</body></html>`;
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'report.html'), html);
    console.log('Report generated at tests/visual/output/report.html');
}

generate().catch(console.error);

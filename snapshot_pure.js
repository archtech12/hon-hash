const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });

  const templates = [
    { id: 'type', filename: 'loud_pure_preview' },
    { id: 'geometric', filename: 'shape_pure_preview' },
    { id: 'badgePremium', filename: 'vip_pure_preview' }
  ];
  
  for (const t of templates) {
    console.log(`Navigating to ${t.id}...`);
    const url = `http://localhost:3000/sticker-generator?testMode=true&template=${t.id}&layout=landscape&theme=blue`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Give it a second to render textures and fonts
    await new Promise(r => setTimeout(r, 2000));
    
    await page.screenshot({ path: `C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\07b03bdc-6f85-4362-82bf-bf7c23a6ab24\\${t.filename}.png`, fullPage: false });
    console.log(`Saved ${t.filename}.png`);
  }

  await browser.close();
}

run();

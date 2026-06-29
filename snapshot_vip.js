const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Set viewport to a good size for viewing stickers
  await page.setViewport({ width: 1400, height: 1000 });

  const templates = ['classic_premium', 'modern_premium', 'print_premium', 'badge_premium'];
  
  for (const template of templates) {
    console.log(`Navigating to ${template}...`);
    // Navigate with Premium layout params
    const url = `http://localhost:3000/sticker-generator?testMode=true&template=${template}&layout=landscape&theme=gold`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Give it a second to render textures and fonts
    await new Promise(r => setTimeout(r, 2000));
    
    await page.screenshot({ path: `C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\07b03bdc-6f85-4362-82bf-bf7c23a6ab24\\${template}_vip_preview.png`, fullPage: false });
    console.log(`Saved ${template}_vip_preview.png`);
  }

  await browser.close();
}

run();

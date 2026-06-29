const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const templates = [
  'Youth', 'Modern', 'Modern Premium', 'Minimal', 'Classic', 
  'Classic V2', 'Classic Pro', 'Print', 'Premium Print', 
  'Loud', 'Verified', 'Verified 2.0', 'Premium VIP', 
  'Shapes', 'Shapes 2.0'
];

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });

  console.log('Navigating to sticker generator...');
  await page.goto('http://localhost:3000/sticker-generator', { waitUntil: 'networkidle0' });

  // Make sure the directory exists
  const outDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  for (let i = 0; i < templates.length; i++) {
    const templateName = templates[i];
    console.log(`Processing template: ${templateName}`);
    
    // Find the template button and click it
    const buttons = await page.$$('button');
    let clicked = false;
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text.trim() === templateName) {
        await btn.click();
        clicked = true;
        break;
      }
    }
    
    if (!clicked) {
      console.log(`Could not find button for template: ${templateName}`);
      continue;
    }
    
    // Wait for animation/render
    await new Promise(r => setTimeout(r, 2000));
    
    // Screenshot the preview container
    const previewContainer = await page.$('.sticker-preview-container'); // Need the actual selector
    if (previewContainer) {
      await previewContainer.screenshot({ path: path.join(outDir, `${templateName.replace(/ /g, '_')}_preview.png`) });
      console.log(`Saved preview for ${templateName}`);
    } else {
       // fallback to full page screenshot
       await page.screenshot({ path: path.join(outDir, `${templateName.replace(/ /g, '_')}_fallback.png`) });
    }
  }

  await browser.close();
  console.log('Done!');
}

run().catch(console.error);

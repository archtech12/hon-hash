const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });

  const url = `http://localhost:3000/sticker-generator?testMode=true&template=badgePremium&layout=landscape&theme=blue`;
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: `C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\07b03bdc-6f85-4362-82bf-bf7c23a6ab24\\vip_bright_preview.png`, fullPage: false });
  console.log(`Saved vip_bright_preview.png`);

  await browser.close();
}

run();

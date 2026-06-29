const puppeteer = require('puppeteer');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\07b03bdc-6f85-4362-82bf-bf7c23a6ab24';
const delay = ms => new Promise(r => setTimeout(r, ms));

async function generate() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 500, height: 700 });

  console.log("Snapping Geometric...");
  await page.goto('http://localhost:3000/sticker-generator?name=ALEX+MORGAN&photo=true&color=green&template=geometric');
  await delay(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'geometric_phase1.png') });

  console.log("Snapping Geometric V2...");
  await page.goto('http://localhost:3000/sticker-generator?name=ALEX+MORGAN&photo=true&color=blue&template=geometric_v2');
  await delay(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'geometric_v2_phase1.png') });

  console.log("Snapping Print Premium...");
  await page.goto('http://localhost:3000/sticker-generator?name=ALEX+MORGAN&photo=true&color=green&template=print_premium');
  await delay(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'print_premium_phase1.png') });

  await browser.close();
  console.log("Done");
}

generate().catch(console.error);

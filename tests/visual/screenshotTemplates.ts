import puppeteer from 'puppeteer';
import * as path from 'path';
import * as fs from 'fs';
import { templates, OUTPUT_DIR, ensureDir, selectTemplate, populateSampleData, triggerDownload } from './helpers';

async function run() {
  ensureDir(OUTPUT_DIR);
  
  // Create download path specific to this run so we can intercept exports
  const downloadPath = path.join(OUTPUT_DIR, 'downloads');
  ensureDir(downloadPath);

  const browser = await puppeteer.launch({ 
    headless: true,
  });
  
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', (err: any) => console.log('PAGE ERROR:', err.message));
  page.on('requestfailed', request => console.log('PAGE REQUEST FAILED:', request.url(), request.failure()?.errorText));
  page.on('dialog', async dialog => {
    console.log('PAGE DIALOG:', dialog.message());
    await dialog.accept();
  });
  
  // Set download behavior
  const client = await page.target().createCDPSession();
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath
  });

  await page.setViewport({ width: 1440, height: 1080 });

  console.log('Navigating to sticker generator...');
  await page.goto('http://localhost:3000/sticker-generator', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);

  for (const templateName of templates) {
    console.log(`Processing template: ${templateName}`);
    
    const selected = await selectTemplate(page, templateName);
    if (!selected) {
      console.log(`Could not find button for template: ${templateName}`);
      continue;
    }
    
    await populateSampleData(page);
    
    // Give it time to render images/fonts
    await new Promise(r => setTimeout(r, 2000));
    
    // 1. Take preview screenshot
    const previewContainer = await page.$('.sticker-preview-container') || await page.$('.aspect-square') || await page.$('div[style*="aspect-ratio"]');
    
    if (previewContainer) {
      const safeName = templateName.replace(/ /g, '_');
      const previewPath = path.join(OUTPUT_DIR, `${safeName}_preview.png`);
      await previewContainer.screenshot({ path: previewPath });
      console.log(`Saved preview for ${templateName}`);
      
      // Hijack anchor clicks to capture the base64 data URL
      await page.evaluate(() => {
         (window as any).lastDownloadUrl = null;
         const originalClick = HTMLAnchorElement.prototype.click;
         HTMLAnchorElement.prototype.click = function() {
            if (this.download) {
               (window as any).lastDownloadUrl = this.href;
            } else {
               originalClick.call(this);
            }
         };
      });

      // 2. Trigger Download
      const downloadClicked = await triggerDownload(page);
      
      if (downloadClicked) {
         // Wait for export to finish (up to 15 seconds)
         let dataUrl: string | null = null;
         for (let i = 0; i < 30; i++) {
             await new Promise(r => setTimeout(r, 500));
             dataUrl = await page.evaluate(() => (window as any).lastDownloadUrl);
             if (dataUrl) break;
         }
         
         if (dataUrl) {
            const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
            const newPath = path.join(OUTPUT_DIR, `${safeName}_export.png`);
            fs.writeFileSync(newPath, base64Data, 'base64');
            console.log(`Saved export for ${templateName}`);
         } else {
             console.log(`No export found for ${templateName}`);
         }
      } else {
         console.log(`Could not find download button for ${templateName}`);
      }

    } else {
       console.log(`Could not find preview container for ${templateName}`);
    }
  }

  await browser.close();
  console.log('Done!');
}

run().catch(console.error);

import * as fs from 'fs';
import * as path from 'path';
import { Page } from 'puppeteer';

export const templates = [
  'Minimal'
];

export const OUTPUT_DIR = path.join(__dirname, 'output');

export function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export async function selectTemplate(page: Page, templateName: string): Promise<boolean> {
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const pTags = await btn.$$('p');
    for (const p of pTags) {
       const text = await page.evaluate(el => el.textContent, p);
       if (text?.trim() === templateName) {
         await btn.click();
         return true;
       }
    }
  }
  return false;
}

export async function populateSampleData(page: Page) {
  // Wait for the UI to be ready
  await page.waitForSelector('input[type="text"]', { timeout: 5000 }).catch(() => {});

  const inputs = await page.$$('input[type="text"]');
  for (const input of inputs) {
    const placeholder = await page.evaluate(el => el.getAttribute('placeholder'), input);
    if (placeholder?.toLowerCase().includes('name')) {
      await input.click({ clickCount: 3 } as any);
      await input.type('Sarah Johnson');
    }
  }
  
  const textareas = await page.$$('textarea');
  for (const textarea of textareas) {
    await textarea.click({ clickCount: 3 } as any);
    await textarea.type('Building a brighter future for all of us.');
  }

  // Upload an image
  try {
     const fileInput = await page.$('input[type="file"]');
     if (fileInput) {
        // Create a dummy image in the output folder
        const dummyImgPath = path.join(OUTPUT_DIR, 'dummy_supporter.jpg');
        if (!fs.existsSync(dummyImgPath)) {
            // Write a tiny 1x1 base64 JPEG
            const base64 = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
            fs.writeFileSync(dummyImgPath, Buffer.from(base64, 'base64'));
        }
        await fileInput.uploadFile(dummyImgPath);
        // Wait for image crop dialog or state update
        await new Promise(r => setTimeout(r, 1000));
        
        // If there's a "Crop" or "Save" button in a modal, click it
        const buttons = await page.$$('button');
        for (const btn of buttons) {
          const text = await page.evaluate(el => el.textContent, btn);
          if (text?.trim().includes('Save') || text?.trim().includes('Crop')) {
            await btn.click();
            await new Promise(r => setTimeout(r, 1000));
            break;
          }
        }
     }
  } catch (e) {
     console.error('Failed to upload image', e);
  }
}

export async function triggerDownload(page: Page) {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text && text.includes('Download')) {
        await page.evaluate(el => el.removeAttribute('disabled'), btn);
        await btn.click();
        return true;
      }
    }
    return false;
}

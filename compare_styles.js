const puppeteer = require('puppeteer');

async function getPageData(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  } catch (e) {
    console.error(`Failed to load ${url}:`, e.message);
    await browser.close();
    return null;
  }

  const data = await page.evaluate(async () => {
    // 1. Computed styles of Hero
    const h1 = document.querySelector('h1');
    const heroStyles = h1 ? window.getComputedStyle(h1) : null;
    const computedStyles = heroStyles ? {
      'font-size': heroStyles.fontSize,
      'line-height': heroStyles.lineHeight,
      'max-width': heroStyles.maxWidth,
      'width': heroStyles.width,
      'transform': heroStyles.transform,
      'zoom': heroStyles.zoom,
      'padding': heroStyles.padding,
      'margin': heroStyles.margin,
      'font-family': heroStyles.fontFamily
    } : null;

    // 2. Fetch fonts loaded
    const fonts = Array.from(document.fonts).map(f => `${f.family} ${f.style} ${f.weight} (${f.status})`);

    // 3. Extract CSS Rules
    let cssRulesCount = 0;
    let cssContentSnippet = "";
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        if (sheet.cssRules) {
          cssRulesCount += sheet.cssRules.length;
          // grab first few rules just to sample
          if (cssContentSnippet.length < 500) {
            cssContentSnippet += sheet.cssRules[0]?.cssText + '\n';
          }
        }
      } catch (e) {
        // CORS issues for external sheets
      }
    }

    return { computedStyles, fonts, cssRulesCount, cssContentSnippet };
  });

  await browser.close();
  return data;
}

async function main() {
  console.log("Fetching data from localhost:3000 (Current Dev Server)...");
  const localData = await getPageData('http://localhost:3000');
  console.log(JSON.stringify(localData, null, 2));

  console.log("\nFetching data from localhost:3001 (Stable Commit e8c924d)...");
  const stableData = await getPageData('http://localhost:3001');
  console.log(JSON.stringify(stableData, null, 2));
}

main();

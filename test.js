const puppeteer = require('puppeteer');

async function getPic() {
  const baseUri = 'https://www.geldersarchief.nl/bronnen/archieven/?mivast=37&miadt=37&mizig=128&miview=tbl&milang=nl&micols=1&misort=dt%7Casc&mires=0&mip2=pakko*&mip1=bar*&mibj=1954&miej=1954'

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(baseUri);
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
}

getPic();
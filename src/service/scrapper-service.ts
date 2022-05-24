import puppeteer from 'puppeteer';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19203');
    const ipas = await page.$$eval("div > div > table", elements => elements.map(
        item => item.textContent
    ));
    ipas.pop();
    await console.log(ipas)
    await page.screenshot({path: './screenshots/ipas.png'});
}

export { getIPAs };
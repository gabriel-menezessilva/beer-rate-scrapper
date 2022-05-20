import puppeteer from 'puppeteer';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19203');

    const ipas = await page.$eval('#\31 816542 > div > table', (el) => {
        console.log({el})
        return (<any>el).value;
    })
    await page.screenshot({path: './screenshots/ipas.png'});


}

export { getIPAs };
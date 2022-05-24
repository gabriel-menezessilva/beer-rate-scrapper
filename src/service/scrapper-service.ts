import puppeteer from 'puppeteer';
import { ids } from '../util/beerSelectorIdList';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19203');
    const ipa = await page.$$eval("div > div > table", elements => elements.map(
        item => item.textContent
    ));
    ipa.pop();
    await console.log(ipa)
    await page.screenshot({path: './screenshots/ipas.png'});
}

export { getIPAs };
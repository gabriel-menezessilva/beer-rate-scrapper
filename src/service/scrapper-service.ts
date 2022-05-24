import puppeteer from 'puppeteer';
import { ids } from '../util/beerSelectorIdList';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19203');
    const ipa = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("#\\31 816542 > div > table")).map(el => el.textContent);
    })
    console.log(ipa)
    // for (let index = 0; index < ids.length; index++) {
    //     const ipa = await page.evaluate(() => {
    //         return Array.from(document.querySelectorAll(`#\\${ids[index]} > div > table`)).map(el => el.textContent);
    //     })
    //     console.log(ipa)
    // }
    await page.screenshot({path: './screenshots/ipas.png'});
}

export { getIPAs };
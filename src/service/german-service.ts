import { cleanString } from './../../utils/string-replacer';
import puppeteer from 'puppeteer';

const getGerman = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19286');

    const content = await page.$$eval("div > div > table tbody", bodies => {
        return bodies.map(body => {
            const rows = body.querySelectorAll('tr');

            return Array.from(rows, row => row.querySelector('td')?.innerText);
        })
    });

    const names = await page.$$eval(".c-panel__right > h3", headers => {
        return headers.map(h => {
            const beerNames = h.querySelectorAll('.c-panel__heading');
            return Array.from(beerNames, beer => beer.textContent);
        }).flat();
    })

    names.shift();

    const german = content.slice(0, 10)
                        .map((c, i) => ({name: cleanString(names[i]), style: c[0], ibu: Number(cleanString(c[2])), abc: Number(cleanString(c[3]))}));

    await page.screenshot({path: './screenshots/german.png'});

    return german;
}

export { getGerman };
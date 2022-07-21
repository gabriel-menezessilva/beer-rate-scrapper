import { cleanString } from './../../utils/string-replacer';
import puppeteer from 'puppeteer';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19203');

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

    const ipas = content.slice(0, 10)
        .map((c, i) => {
            console.log({ name: cleanString(names[i]), style: c[0], ibu: Number(cleanString(c[3])), abc: Number(cleanString(c[4])) })
        });
    // const ipas = content.slice(0, 10)
    //     .map((c, i) => ({ name: names[i], style: c[0], ibu: Number(cleanString(c[3])), abc: Number(cleanString(c[4])) }));

    await page.screenshot({ path: './screenshots/ipas.png' });
    return ipas;
}

export { getIPAs };
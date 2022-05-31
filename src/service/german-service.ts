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
                        .map((c, i) => ({name: names[i], style: c[0], ibu: c[2], abc: c[3]}));

    console.log(german)
    await page.screenshot({path: './screenshots/german.png'});
}

export { getGerman };
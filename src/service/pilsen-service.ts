import puppeteer from 'puppeteer';

const getPilsen = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mybest-brazil.com.br/19217');

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

    const pilsen = content.slice(0, 10)
                        .map((c, i) => ({name: names[i], style: 'Pilsen', ibu: c[2], abc: c[4]}));

    console.log(pilsen)
    await page.screenshot({path: './screenshots/pilsen.png'});
}

export { getPilsen };
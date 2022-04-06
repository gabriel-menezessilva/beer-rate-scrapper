import puppeteer from 'puppeteer';

const getIPAs = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.brejas.com.br/lista/cervejas/bom-custo-beneficio-para-conhecer-o-estilo-india-pale-ale-ipa');

    const ipas = await page.$eval('', (el) => {
        console.log({el})
        return (<any>el).value;
    })
    await page.screenshot({path: './screenshots/ipas.png'});


}

export { getIPAs };
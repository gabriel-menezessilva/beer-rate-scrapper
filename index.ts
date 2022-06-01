import { getArtisanal } from './src/service/artisanal-service';
import { getGerman } from './src/service/german-service';
import { getIPAs } from './src/service/ipa-service';
import { getPilsen } from './src/service/pilsen-service';
import { getSingleMalt } from './src/service/single-malt-service';
import { getStout } from './src/service/stout-service';
import { getWeiss } from './src/service/weiss-service';
import { writeFile } from 'fs/promises';

(async () => {

  try {
    const ipas = await getIPAs();
    const pilsens = await getPilsen();
    const stouts = await getStout();
    const singleMalts = await getSingleMalt();
    const germans = await getGerman();
    const artisanals = await getArtisanal();
    const weiss = await getWeiss();

    const beers = [...ipas, ...pilsens, ...stouts, ...singleMalts, ...germans, ...artisanals, ...weiss]

    await writeFile('db.json', JSON.stringify(beers))
  } catch (e) {
    console.log(e);
  }
})();
import puppeteer from 'puppeteer';
import { getArtisanal } from './src/service/artisanal-service';
import { getGerman } from './src/service/german-service';
import { getIPAs } from './src/service/ipa-service';
import { getPilsen } from './src/service/pilsen-service';
import { getSingleMalt } from './src/service/single-malt-service';
import { getStout } from './src/service/stout-service';
import { getWeiss } from './src/service/weiss-service';
import { db } from './src/util/admin';

(async () => {

  try {
    // getIPAs();
    // getPilsen();
    // getStout();
    // getSingleMalt();
    // getGerman();
    // getArtisanal();
    getWeiss();
  } catch (e) {
    console.log(e);
  }
})();
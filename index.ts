import puppeteer from 'puppeteer';
import { getIPAs } from './src/service/ipa-service';
import { getPilsen } from './src/service/pilsen-service';
import { getStout } from './src/service/stout-service';
import { db } from './src/util/admin';

(async () => {

  try {
    getIPAs();
    getPilsen();
    getStout();
  } catch (e) {
    console.log(e);
  }
})();
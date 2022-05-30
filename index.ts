import puppeteer from 'puppeteer';
import { getIPAs } from './src/service/ipa-service';
import { getPilsen } from './src/service/pilsen-service';
import { db } from './src/util/admin';

(async () => {

  try {
    getIPAs();
    getPilsen();
  } catch (e) {
    console.log(e);
  }
})();
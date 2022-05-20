import puppeteer from 'puppeteer';
import { getIPAs } from './src/service/scrapper-service';
import { db } from './src/util/admin';

(async () => {

  try {
    getIPAs();
  } catch (e) {
    console.log(e);
  }
})();
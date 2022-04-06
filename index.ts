import puppeteer from 'puppeteer';
import { getIPAs } from './service/scrapper-service';

(async () => {

  try {
    getIPAs();
  } catch (e) {
    console.log(e);
  }
})();
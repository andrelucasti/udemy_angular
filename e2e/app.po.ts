import { browser, element, by } from 'protractor';

export class CapsrnrbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cps-root h1')).getText();
  }
}

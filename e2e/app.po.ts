import { browser, element, by } from 'protractor';

export class Angular2DirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dir-root h1')).getText();
  }
}

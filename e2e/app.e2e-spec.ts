import { CapsrnrbPage } from './app.po';

describe('capsrnrb App', function() {
  let page: CapsrnrbPage;

  beforeEach(() => {
    page = new CapsrnrbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cps works!');
  });
});

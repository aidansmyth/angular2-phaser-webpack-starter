import { browser, by, element } from 'protractor';

describe('Help', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/help');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Tevilnelgeht - Help';
    expect(subject).toEqual(result);
  });

});

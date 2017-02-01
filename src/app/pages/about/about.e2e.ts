import { browser, by, element } from 'protractor';

describe('About', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/about');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Tevilnelgeht - About';
    expect(subject).toEqual(result);
  });

});

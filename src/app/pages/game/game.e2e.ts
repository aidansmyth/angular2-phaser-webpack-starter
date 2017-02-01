import { browser, by, element } from 'protractor';

describe('Game', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Tevilnelgeht';
    expect(subject).toEqual(result);
  });

});

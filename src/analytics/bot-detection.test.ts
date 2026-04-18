import { describe, it, expect } from 'vitest';
import { isBot } from './bot-detection';

describe(`isBot`, () => {
  it(`returns false for a normal browser user agent`, () => {
    expect(
      isBot(
        `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`
      )
    ).toBe(false);
  });

  it(`returns true for Googlebot`, () => {
    expect(
      isBot(
        `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`
      )
    ).toBe(true);
  });

  it(`returns true for a generic spider agent`, () => {
    expect(isBot(`SomeSpider/1.0`)).toBe(true);
  });

  it(`returns true for Chrome-Lighthouse`, () => {
    expect(isBot(`Mozilla/5.0 Chrome-Lighthouse`)).toBe(true);
  });

  it(`returns true for Pinterest bot`, () => {
    expect(isBot(`Pinterest/0.2 (+http://www.pinterest.com/bot.html)`)).toBe(
      true
    );
  });

  it(`returns false for an empty string`, () => {
    expect(isBot(``)).toBe(false);
  });

  it(`is a pure function — no DOM or window access needed`, () => {
    expect(typeof isBot).toBe(`function`);
    expect(isBot.length).toBe(1);
  });
});

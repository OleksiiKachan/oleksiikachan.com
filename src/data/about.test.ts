import { describe, it, expect } from 'vitest';
import { about, type SocialLinkType } from './about';

describe(`about`, () => {
  it(`name is a non-empty string`, () => {
    expect(typeof about.name).toBe(`string`);
    expect(about.name.length).toBeGreaterThan(0);
  });

  it(`title is a non-empty string`, () => {
    expect(typeof about.title).toBe(`string`);
    expect(about.title.length).toBeGreaterThan(0);
  });

  it(`image is a non-empty string`, () => {
    expect(typeof about.image).toBe(`string`);
    expect(about.image.length).toBeGreaterThan(0);
  });

  it(`intro is a non-empty string`, () => {
    expect(typeof about.intro).toBe(`string`);
    expect(about.intro.length).toBeGreaterThan(0);
  });

  it(`links contains linkedin, github and instagram entries`, () => {
    const validTypes: SocialLinkType[] = [`linkedin`, `github`, `instagram`];
    const linkTypes = about.links.map((l) => l.type);
    expect(linkTypes).toEqual(expect.arrayContaining(validTypes));
  });

  it(`every link has a non-empty href`, () => {
    about.links.forEach((link) => {
      expect(link.href.length).toBeGreaterThan(0);
    });
  });
});

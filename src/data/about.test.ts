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

  it(`company is a non-empty string`, () => {
    expect(typeof about.company).toBe(`string`);
    expect(about.company.length).toBeGreaterThan(0);
  });

  it(`location is a non-empty string`, () => {
    expect(typeof about.location).toBe(`string`);
    expect(about.location.length).toBeGreaterThan(0);
  });

  it(`skills is a non-empty array of strings`, () => {
    expect(Array.isArray(about.skills)).toBe(true);
    expect(about.skills.length).toBeGreaterThan(0);
    about.skills.forEach((skill) => {
      expect(typeof skill).toBe(`string`);
      expect(skill.length).toBeGreaterThan(0);
    });
  });

  it(`certifications is a non-empty array with name, issuer, and year`, () => {
    expect(Array.isArray(about.certifications)).toBe(true);
    expect(about.certifications.length).toBeGreaterThan(0);
    about.certifications.forEach((cert) => {
      expect(typeof cert.name).toBe(`string`);
      expect(cert.name.length).toBeGreaterThan(0);
      expect(typeof cert.issuer).toBe(`string`);
      expect(cert.issuer.length).toBeGreaterThan(0);
      expect(typeof cert.year).toBe(`number`);
      expect(cert.year).toBeGreaterThan(2000);
    });
  });
});

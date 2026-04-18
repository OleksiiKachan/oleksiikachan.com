import { describe, it, expect } from 'vitest';
import { buildMetadata } from 'lib/metadata';

describe(`buildMetadata`, () => {
  it(`title follows "Oleksii Kachan | suffix" format`, () => {
    const result = buildMetadata({ suffix: `About`, description: `desc` });
    expect(result.title).toBe(`Oleksii Kachan | About`);
  });

  it(`with path: includes openGraph with correct title, description, url, image`, () => {
    const result = buildMetadata({
      suffix: `About`,
      description: `My description`,
      path: `/about`,
    });
    expect(result.openGraph).toBeDefined();
    expect(result.openGraph?.title).toBe(`Oleksii Kachan | About`);
    expect(result.openGraph?.description).toBe(`My description`);
    expect(result.openGraph?.url).toBe(`https://oleksiikachan.com/about`);
    expect(result.openGraph?.images).toContain(
      `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`
    );
  });

  it(`without path: no openGraph key`, () => {
    const result = buildMetadata({ suffix: `404`, description: `Not found` });
    expect(result.openGraph).toBeUndefined();
  });

  it(`with explicit ogImage: uses override instead of default logo`, () => {
    const customImage = `https://example.com/custom.jpg`;
    const result = buildMetadata({
      suffix: `Project`,
      description: `A project`,
      path: `/projects/foo`,
      ogImage: customImage,
    });
    expect(result.openGraph?.images).toContain(customImage);
    expect(result.openGraph?.images).not.toContain(
      `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`
    );
  });
});

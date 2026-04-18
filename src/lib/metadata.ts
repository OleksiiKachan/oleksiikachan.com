import type { Metadata } from 'next';

const BASE_URL = `https://oleksiikachan.com`;
const OG_LOGO = `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`;

type BuildMetadataOptions = {
  suffix: string;
  description: string;
  path?: string;
  ogImage?: string;
};

export const buildMetadata = ({
  suffix,
  description,
  path,
  ogImage = OG_LOGO,
}: BuildMetadataOptions): Metadata => {
  const title = `Oleksii Kachan | ${suffix}`;

  return {
    title,
    description,
    ...(path !== undefined && {
      openGraph: {
        title,
        description,
        images: [ogImage],
        url: `${BASE_URL}${path}`,
      },
    }),
  };
};

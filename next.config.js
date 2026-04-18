/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: `https`,
        hostname: `res.cloudinary.com`,
        pathname: `/oleksiikachan/image/upload/**`,
      },
    ],
  },
  async redirects() {
    return [
      {
        source: `/`,
        destination: `/about`,
        permanent: true,
      },
      {
        source: `/experience`,
        destination: `/timeline`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

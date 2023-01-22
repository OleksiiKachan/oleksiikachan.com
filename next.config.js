/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [`res.cloudinary.com`],
  },
  async redirects() {
    return [
      {
        source: `/`,
        destination: `/about`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

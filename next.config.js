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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
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

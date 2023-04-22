// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require(`@sentry/nextjs`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [`res.cloudinary.com`, `storage.googleapis.com`],
  },
  i18n: {
    locales: [`en`],
    defaultLocale: `en`,
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
      {
        source: `/experience`,
        destination: `/timeline`,
        permanent: true,
      },
    ];
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Hides source maps from generated client bundles
    hideSourceMaps: process.env.NODE_ENV !== `production`,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);

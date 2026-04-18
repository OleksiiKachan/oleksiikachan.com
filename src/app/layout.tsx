import Client from 'client';
import { GtmScript, AnalyticsProviders } from 'analytics';
import { buildMetadata } from 'lib/metadata';

import 'styles/globals.scss';

export const metadata = buildMetadata({
  suffix: `Software Developer`,
  description: `My name is Oleksii Kachan and I'm a software developer`,
  path: ``,
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body id="root">
      <GtmScript />
      <AnalyticsProviders />
      <Client>{children}</Client>
    </body>
  </html>
);

export default RootLayout;

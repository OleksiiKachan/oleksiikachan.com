import type { AppProps } from 'next/app';
import Script from 'next/script';
import Client from 'client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'styles/globals.scss';

const isClient = () => typeof window !== `undefined`;

const isBot = () =>
  isClient() &&
  /(seo4ajax|bot|spider|pinterest|crawler|archiver|flipboard|mediapartners|facebookexternalhit|quora|whatsapp|outbrain|yahoo! slurp|embedly|developers\.google\.com\/+\/web\/snippet|vkshare|w3c_validator|tumblr|skypeuripreview|nuzzel|qwantify|bitrix link preview|XING-contenttabreceiver|Chrome-Lighthouse|mail\.ru)/gi.test(
    window.navigator.userAgent
  );

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    {isClient() && !isBot() && (
      <>
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
          }}
        />
        <Analytics />
        <SpeedInsights />
      </>
    )}
    <Client>
      <Component {...pageProps} />
    </Client>
  </>
);

export default App;

import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: `Oleksii Kachan | Software Developer`,
  description: `My name is Oleksii Kachan and I'm a software developer`,
  openGraph: {
    title: `Oleksii Kachan | Software Developer`,
    description: `My name is Oleksii Kachan and I'm a software developer`,
    images: [
      `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`,
    ],
    url: `https://oleksiikachan.com`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="root">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: `none`, visibility: `hidden` }}
          />
        </noscript>
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
        <Client>{children}</Client>
      </body>
    </html>
  );
}

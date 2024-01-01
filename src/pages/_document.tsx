import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV === `development` && (
            <Script
              id="disable-error-overlay"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `const handler = (event) => {
                if (event?.error?.message) {
                  const message = event.error.message.toLowerCase();
                      if (
                      message.match(
                      /firebase|hydration|hydrating|rendered|cancelled|rendering/i
                      )
                      ) {
                        event.stopImmediatePropagation();
                  }
                }
              };

              window.addEventListener('error', handler);
              window.addEventListener('unhandledrejection', handler);`,
              }}
            />
          )}
        </Head>
        <body id="root">
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: `none`, visibility: `hidden` }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

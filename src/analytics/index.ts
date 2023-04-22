import * as Sentry from '@sentry/nextjs';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

const init = (client = false) => {
  const integrations = [];

  if (client) {
    integrations.push(
      new Sentry.Replay({
        // Additional Replay configuration goes in here, for example:
        maskAllText: true,
        blockAllMedia: true,
      })
    );
  }

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: process.env.NODE_ENV === `development`,

    replaysOnErrorSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    integrations,
  });

  if (client) {
    LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET || ``);
    setupLogRocketReact(LogRocket);
    LogRocket.getSessionURL((sessionURL) => {
      Sentry.configureScope((scope) => {
        scope.setExtra(`sessionURL`, sessionURL);
      });
    });
  }
};

export default init;

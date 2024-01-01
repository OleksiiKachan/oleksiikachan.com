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
    ignoreErrors: [
      `Hydration failed because the initial UI`,
      `There was an error while hydrating`,
      `Text content does not match server-rendered HTML`,
      `?invariant=418`, // Hydration failed because the initial UI does not match what was rendered on the server.
      `?invariant=419`, // The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.
      `?invariant=421`, // This Suspense boundary received an update before it finished hydrating...
      `?invariant=422`, // There was an error while hydrating this Suspense boundary. Switched to client rendering.
      `?invariant=423`, // There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root...
      `?invariant=425`, // Text content does not match server-rendered HTML...
    ],
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

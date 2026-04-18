import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const AnalyticsProviders = () => (
  <>
    <Analytics />
    <SpeedInsights />
  </>
);

export default AnalyticsProviders;

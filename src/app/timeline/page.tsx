import { buildMetadata } from 'lib/metadata';
import { buildTimeline } from 'lib/timeline';
import TimelineScene from 'scenes/timeline';

export const metadata = buildMetadata({
  suffix: `Timeline`,
  description: `Career timeline`,
  path: `/timeline`,
});

const TimelinePage = async () => {
  const entries = buildTimeline();

  return <TimelineScene title="Timeline" entries={entries} />;
};

export default TimelinePage;

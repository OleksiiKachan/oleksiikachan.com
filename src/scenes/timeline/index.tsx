'use client';

import { motion } from 'framer-motion';

import type { TimelineEntry } from 'lib/timeline';
import TimelineItem from './components/timeline-item';

import styles from './timeline.module.scss';

const Timeline: React.FC<{
  title: string;
  entries: TimelineEntry[];
}> = ({ title, entries }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ol className={styles.timelineContainer}>
        <motion.div
          className={styles.line}
          animate={{ bottom: [`150%`, `0%`] }}
          transition={{ duration: 1.5 }}
        />
        {entries.map(({ side, ...item }, index) => (
          <TimelineItem key={item.id} item={item} side={side} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;

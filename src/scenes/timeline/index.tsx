'use client';

import { motion } from 'framer-motion';

import type { TimelineEntry } from 'lib/timeline';
import { keyframes, transitions } from 'config/animations';
import TimelineItem from './components/timeline-item';

import styles from './timeline.module.scss';

type TimelineProps = {
  title: string;
  entries: Array<TimelineEntry>;
};

const Timeline = ({ title, entries }: TimelineProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ol className={styles.timelineContainer}>
        <motion.div
          className={styles.line}
          animate={keyframes.timelineLine.animate}
          transition={transitions.timelineLine}
        />
        {entries.map(({ side, ...item }, index) => (
          <TimelineItem key={item.id} item={item} side={side} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;

import { motion } from 'framer-motion';

import type { TimelineEntry } from 'lib/timeline';
import { keyframes, transitions, stagger } from 'config/animations';

import styles from './timeline-item.module.scss';

type TimeLineItem = Pick<
  TimelineEntry,
  'title' | 'dates' | 'subtitle' | 'responsibilities' | 'linkedProjects'
>;

type TimelineItemProps = {
  item: TimeLineItem;
  index: number;
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return (
    <li className={styles.container}>
      <motion.div
        className={styles.info}
        animate={keyframes.timelineInfo.animate}
        transition={{
          ...transitions.timelineItem,
          delay: stagger.contentBase + stagger.step * index,
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.dates}</p>
        <h3>{item.subtitle}</h3>
      </motion.div>

      <motion.div
        className={styles.circle}
        animate={keyframes.timelineCircle.animate}
        transition={{
          ...transitions.timelineItem,
          delay: stagger.circleBase + stagger.step * index,
        }}
      />

      <motion.div
        className={styles.details}
        animate={keyframes.timelineDetails.animate}
        transition={{
          ...transitions.timelineItem,
          delay: stagger.contentBase + stagger.step * index,
        }}
      >
        {item.responsibilities.length > 0 && (
          <ul className={styles.responsibilities}>
            {item.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        {item.linkedProjects.length > 0 && (
          <ul className={styles.projects}>
            {item.linkedProjects.map((p) => (
              <li key={p.id} className={styles.projectTag}>
                {p.title}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
};

export default TimelineItem;

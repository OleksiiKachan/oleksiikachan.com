import { motion } from 'framer-motion';
import { useBreakpointContext } from 'client/breakpoints';

import type { TimelineEntry } from 'lib/timeline';
import { keyframes, transitions, stagger } from 'config/animations';

import styles from './timeline-item.module.scss';

type TimeLineItem = Pick<
  TimelineEntry,
  'title' | 'dates' | 'subtitle' | 'responsibilities' | 'linkedProjects'
>;

type TimelineItemProps = {
  item: TimeLineItem;
  side: `right` | `left`;
  index: number;
};

const TimelineItem = ({ item, side, index }: TimelineItemProps) => {
  const { isDesktop } = useBreakpointContext();

  return (
    <li className={`${styles.container} ${styles[side]}`}>
      <motion.div
        className={styles.circle}
        animate={keyframes.timelineCircle.animate}
        transition={{
          ...transitions.timelineItem,
          delay: stagger.circleBase + stagger.step * index,
        }}
      />
      <motion.div
        className={styles.content}
        animate={
          side === `left` && isDesktop
            ? keyframes.timelineContentLeft.animate
            : keyframes.timelineContentRight.animate
        }
        transition={{
          ...transitions.timelineItem,
          delay: stagger.contentBase + stagger.step * index,
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.dates}</p>
        <h3>{item.subtitle}</h3>
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

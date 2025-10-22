import { motion } from 'framer-motion';
import useSystemConfigContext from 'client/system-config-context';

import styles from './timeline-item.module.scss';

type TimeLineItem = {
  title: string;
  dates: string;
  subtitle: string;
};

const TimelineItem: React.FC<{
  item: TimeLineItem;
  side: `right` | `left`;
  index: number;
}> = ({ item, side, index }) => {
  const { breakpoint } = useSystemConfigContext();

  return (
    <li className={`${styles.container} ${styles[side]}`}>
      <motion.div
        className={styles.circle}
        animate={{ scale: [0, 1], y: `-50%` }}
        transition={{ duration: 0.7, type: `spring`, delay: 0.4 + 0.1 * index }}
      />
      <motion.div
        className={styles.content}
        animate={
          side === `left` && breakpoint === `desktop`
            ? { opacity: [0, 1], x: [`-100%`, `0%`] }
            : { opacity: [0, 1], x: [`100%`, `0%`] }
        }
        transition={{ duration: 0.7, type: `spring`, delay: 0.2 + 0.1 * index }}
      >
        <h2>{item.title}</h2>
        <p>{item.dates}</p>
        <h3>{item.subtitle}</h3>
      </motion.div>
    </li>
  );
};

export default TimelineItem;

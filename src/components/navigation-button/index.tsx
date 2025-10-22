'use client';

import { motion, type Transition } from 'framer-motion';

import styles from './navigation-button.module.scss';

const transition = { type: `tween`, duration: 0.1 } as Transition;

const NavButton: React.FC<{
  onClick: () => void;
  opened: boolean;
}> = ({ onClick, opened }) => {
  return (
    <button
      className={`${styles.container} ${opened ? styles.open : ``}`}
      onClick={onClick}
      aria-label="menu"
    >
      <motion.div
        animate={{
          rotateZ: opened ? `45deg` : `0deg`,
          y: opened ? `6px` : `0px`,
        }}
        transition={transition}
      />
      <motion.div
        animate={{
          scaleX: opened ? 0 : 1,
          originX: `50%`,
        }}
        transition={transition}
      />
      <motion.div
        animate={{
          rotateZ: opened ? `-45deg` : `0deg`,
          y: opened ? `-8px` : `0px`,
        }}
        transition={transition}
      />
    </button>
  );
};

export default NavButton;

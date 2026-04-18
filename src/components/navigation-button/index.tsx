'use client';

import { motion } from 'framer-motion';

import { transitions } from 'config/animations';

import styles from './navigation-button.module.scss';

type NavButtonProps = {
  onClick: () => void;
  opened: boolean;
};

const NavButton = ({ onClick, opened }: NavButtonProps) => {
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
        transition={transitions.hamburger}
      />
      <motion.div
        animate={{
          scaleX: opened ? 0 : 1,
          originX: `50%`,
        }}
        transition={transitions.hamburger}
      />
      <motion.div
        animate={{
          rotateZ: opened ? `-45deg` : `0deg`,
          y: opened ? `-8px` : `0px`,
        }}
        transition={transitions.hamburger}
      />
    </button>
  );
};

export default NavButton;

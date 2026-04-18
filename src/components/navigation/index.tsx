'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { NAV_ITEMS, isNavItemActive } from 'config/navigation';
import { keyframes, transitions } from 'config/animations';

import styles from './navigation.module.scss';

const Navigation: React.FC<{
  opened: boolean;
  onClick: () => void;
}> = ({ opened, onClick }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {opened && (
        <motion.nav
          key="navigaition"
          className={styles.container}
          initial={keyframes.navSlide.initial}
          animate={keyframes.navSlide.animate}
          exit={keyframes.navSlide.exit}
          transition={transitions.navSlide}
        >
          <ol>
            {NAV_ITEMS.map(({ caption, href }) => (
              <li key={caption}>
                <Link
                  href={href}
                  onClick={onClick}
                  aria-current={
                    isNavItemActive(href, pathname) ? `page` : undefined
                  }
                >
                  {caption}
                </Link>
              </li>
            ))}
          </ol>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;

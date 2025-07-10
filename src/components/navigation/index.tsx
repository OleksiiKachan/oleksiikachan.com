import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

import { Container } from './styled';

const menu = [
  { caption: `About me`, href: `/about` },
  { caption: `Projects`, href: `/projects` },
  { caption: `Timeline`, href: `/timeline` },
  { caption: `Contact me`, href: `/contact` },
];

const Navigation: React.FC<{
  opened: boolean;
  onClick: () => void;
}> = ({ opened, onClick }) => (
  <AnimatePresence>
    {opened && (
      <Container
        key="navigaition"
        initial={{ y: `-100%` }}
        animate={{
          y: 0,
        }}
        exit={{
          y: `-100%`,
        }}
        transition={{ type: `spring`, bounce: 0, duration: 0.4 }}
      >
        <ol>
          {menu.map(({ caption, href }) => (
            <li key={caption}>
              <Link href={href} onClick={onClick}>
                {caption}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    )}
  </AnimatePresence>
);

export default Navigation;

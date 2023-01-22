import { Link } from 'wonder-engine';
import { Container } from './styled';
import { AnimatePresence } from 'framer-motion';

const menu = [
  { caption: `About me`, href: `/about` },
  { caption: `Case studies`, href: `/case` },
  { caption: `Timeline`, href: `/timeline` },
  { caption: `Contact me`, href: `/contact` },
];

const Navigation = ({
  opened,
  onClick,
}: {
  opened: boolean;
  onClick: () => void;
}) => {
  return (
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
};

export default Navigation;

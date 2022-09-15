import { useWonderEngineContext } from 'wonder-engine';
import { Container } from './styled';
import { AnimatePresence } from 'framer-motion';

const Navigation = ({ opened }) => {
  const { Link } = useWonderEngineContext();

  return (
    <AnimatePresence>
      {opened && (
        <Container
          initial={{ y: '-100%' }}
          animate={{
            y: 0,
          }}
          exit={{
            y: '-100%',
          }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <ol>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="/case">Case studies</Link>
            </li>
            <li>
              <Link href="/timeline">Timeline</Link>
            </li>
            <li>
              <Link href="/contact">Contact me</Link>
            </li>
          </ol>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Navigation;

import { LinkContainer } from 'wonder-engine';
import { Container } from './styled';
import { AnimatePresence } from 'framer-motion';

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
              <LinkContainer component="a" href="/about" onClick={onClick}>
                About me
              </LinkContainer>
            </li>
            <li>
              <LinkContainer component="a" href="/case" onClick={onClick}>
                Case studies
              </LinkContainer>
            </li>
            <li>
              <LinkContainer component="a" href="/timeline" onClick={onClick}>
                Timeline
              </LinkContainer>
            </li>
            <li>
              <LinkContainer component="a" href="/contact" onClick={onClick}>
                Contact me
              </LinkContainer>
            </li>
          </ol>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Navigation;

import { Container } from './styled';
import { motion } from 'framer-motion';

const transition = { type: 'tween', duration: 0.1 };

const NavButton = ({ onClick, opened }) => {
  return (
    <Container $open={opened} onClick={onClick}>
      <motion.div
        animate={{
          rotateZ: opened ? `45deg` : `0deg`,
          y: opened ? `6px` : `0px`,
        }}
        transition={transition}
      />
      <motion.div
        animate={{
          opacity: opened ? 0 : 1,
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
    </Container>
  );
};

export default NavButton;

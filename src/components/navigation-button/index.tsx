import { motion } from 'framer-motion';

import { Container } from './styled';

const transition = { type: `tween`, duration: 0.1 };

const NavButton: React.FC<{
  onClick: () => void;
  opened: boolean;
}> = ({ onClick, opened }) => {
  return (
    <Container $open={opened} onClick={onClick} aria-label="menu">
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
    </Container>
  );
};

export default NavButton;

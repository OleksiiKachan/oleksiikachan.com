import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const Container = styled.div`
  position: relative;
  padding: 40px 20px;

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin: 0 0 40px;
  }
`;

export const TimelineContainer = styled.ol`
  list-style: none;
  margin: 0;
  padding: 25px 0;
`;

export const Line = styled(motion.div)`
  position: absolute;
  width: 2px;
  background-color: var(--color-black);
  top: 100px;
  left: 50%;
  bottom: 150%;

  @media only screen and (max-width: ${breakpoints.tabletMax}) {
    left: 10%;
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-black);
  padding-top: 100px;
  padding: 100px 30px 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  ol {
    list-style: none;
    padding: 0;
    margin: 40px 0 0;

    li {
      display: flex;
      justify-content: center;

      a {
        color: var(--color-grey);
        font-size: 52px;
        line-height: 65px;
        font-weight: bold;

        &:hover {
          color: var(--color-white);
        }
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 40px 0;
    width: 35%;
  }

  @media only screen and (max-width: ${breakpoints.tabletMax}) {
    width: 60%;
  }

  h2 {
    margin: 0 0 8px;
    font-size: 2.4rem;
    position: relative;

    @media only screen and (max-width: ${breakpoints.tabletMax}) {
      font-size: 1.6rem;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 8px;
      width: 40px;
      bottom: 0px;
      background-color: var(--color-gold);
      z-index: -1;
      opacity: 0.7;
    }
  }

  h3 {
    font-size: 1.4rem;
    margin: 0;
  }

  p {
    font-weight: 100;
    font-size: 1.4rem;
    margin: 0 0 8px;
  }
`;

export const Container = styled.li<{ $side: `left` | `right` }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
  margin: 20px 0;
  color: var(--color-black);

  ${(props) =>
    props.$side === `left` &&
    css`
      text-align: right;

      ${Content} {
        align-items: flex-end;
        left: 0;

        h2:after {
          right: -8px;
        }
      }
    `};

  ${(props) =>
    props.$side === `right` &&
    css`
      ${Content} {
        right: -60%;
        align-items: flex-start;

        h2:after {
          left: -8px;
        }
      }
    `};

  @media only screen and (max-width: ${breakpoints.tabletMax}) {
    margin: 60px 0;
    text-align: left;

    &:first-child {
      margin: 20px 0 60px 0;
    }

    ${Content} {
      left: 25%;
      align-items: flex-start;

      h2:after {
        left: -8px;
      }
    }
  }
`;

export const Circle = styled(motion.div)`
  width: 36px;
  height: 36px;
  background-color: var(--color-gold);
  border: 8px solid var(--color-bg);
  border-radius: 50%;
  z-index: 1;
  transform: translateY(-50%);
  top: 40%;
  position: absolute;
  left: calc(50% - 17px);

  @media only screen and (max-width: ${breakpoints.tabletMax}) {
    left: calc(10% - 32px);
  }
`;

import styled, { css, keyframes } from 'styled-components';
import breakpoints from 'styles/breakpoints';

const opacity = keyframes`{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;

const pop = keyframes`{
  0% {
    transform: scale(0) translateY(-50%);
  }
  80% {
    transform: scale(1.3) translateY(-50%);
  }
  100% {
    transform: scale(1) translateY(-50%);
  }
}`;

const fromRightToCenter = keyframes`{
  0% {
    transform: translateX(100%);
  }
  80% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}`;

const fromLeftToCenter = keyframes`{
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}`;

export const Content = styled.div`
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
        transform: translateX(-100%);
        opacity: 0;
        animation: ${opacity} 700ms ease-in-out forwards,
          ${fromLeftToCenter} 700ms ease-in-out forwards;

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
        transform: translateX(100%);
        opacity: 0;
        animation: ${opacity} 700ms ease-in-out forwards,
          ${fromRightToCenter} 700ms ease-in-out forwards;

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
      transform: translateX(100%);
      animation: ${opacity} 700ms ease-in-out forwards,
        ${fromRightToCenter} 700ms ease-in-out forwards;

      h2:after {
        left: -8px;
      }
    }
  }
`;

export const Circle = styled.div`
  width: 36px;
  height: 36px;
  background-color: var(--color-gold);
  border: 8px solid var(--color-bg);
  border-radius: 50%;
  z-index: 1;
  transform: scale(0) translateY(-50%);
  top: 40%;
  position: absolute;
  left: calc(50% - 17px);
  animation: ${pop} 700ms ease-in-out forwards;

  @media only screen and (max-width: ${breakpoints.tabletMax}) {
    left: calc(10% - 17px);
  }
`;

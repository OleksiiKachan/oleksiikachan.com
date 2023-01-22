import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;

  hgroup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 4.6rem;
    margin: 0 0 20px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 8px;
      left: -8px;
      right: -8px;
      bottom: 6px;
      background-color: var(--color-gold);
      z-index: -1;
    }
  }

  h2 {
    font-size: 3.4rem;
    font-weight: 400;
    margin: 0;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 20px 0;

    hgroup {
      width: 100%;
      padding: 0 20px;
    }

    h1 {
      font-size: 3.8rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (min-width: ${breakpoints.tabletMin}) {
    border-radius: 10px;
    margin-right: 150px;
  }
`;

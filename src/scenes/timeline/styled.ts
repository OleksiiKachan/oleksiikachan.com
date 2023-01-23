import styled, { keyframes } from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const Container = styled.div`
  padding: 40px 20px;

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin: 0 0 40px;
  }
`;

const timelineLine = keyframes`{
    from {
      bottom: 150%;
    }
    to {
      bottom: 0;
    }
  }`;

export const TimelineContainer = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 25px 0;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--color-black);
    top: 0;
    left: 50%;
    bottom: 150%;
    animation: ${timelineLine} 1500ms ease-in-out forwards;

    @media only screen and (max-width: ${breakpoints.tabletMax}) {
      left: 10%;
    }
  }
`;

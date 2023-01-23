import styled from 'styled-components';

import breakpoints from 'styles/breakpoints';

export const Container = styled.header`
  padding: 16px 32px 16px 16px;
  display: flex;
  justify-content: space-between;

  > a {
    background-color: var(--color-gold);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-left: 10px;
    padding: 8px;

    @media only screen and (max-width: ${breakpoints.tabletMax}) {
      height: 48px;
    }
  }
`;

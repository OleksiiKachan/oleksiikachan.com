import styled from 'styled-components';

import breakpoints from 'styles/breakpoints';

export const Paragraph = styled.div`
  font-size: 1.6rem;
  padding: 0 20px;

  p {
    margin-top: 0;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const SocialMedia = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin: 40px 0;
  display: flex;
  align-items: center;

  h3 {
    font-size: 2.4rem;
    margin: 0;
  }

  li {
    &:not(:last-child) {
      margin-right: 15px;
    }

    @media only screen and (max-width: ${breakpoints.mobile}) {
      &:first-child {
        flex-grow: 1;
      }
    }
  }
`;

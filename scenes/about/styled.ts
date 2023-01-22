import styled from 'styled-components';

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

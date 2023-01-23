import styled from 'styled-components';
import { Link } from 'wonder-engine';

export const Container = styled(Link)`
  img {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

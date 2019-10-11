import styled from 'styled-components';
import { colors } from '../../assets/style';

/*
    <TechBadge type='dark|light'>{...children}</TechBadge>
*/

type PropsType = {
  type: string;
};

export default styled.span`
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 100ms ease-in-out;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translateX(2px);
    transform: translateY(2px);
  }

  ${({ type }: PropsType) => {
    switch (type) {
      case 'dark':
        return `
          background-color: ${colors.grey};
          color: ${colors.white};`;
      case 'light':
        return `
          background-color: ${colors.white};
          color: ${colors.grey};`;
    }
  }};
`;

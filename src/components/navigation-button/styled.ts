import styled from 'styled-components';

export const Container = styled.button<{ $open: boolean }>`
  display: block;
  z-index: 2;
  width: 48px;
  height: 48px;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  --border-color: var(--color-gold);
  background-color: var(--color-gold);
  border: none;
  position: relative;

  > div {
    position: absolute;
    left: 10px;
    right: 0px;
    --line-width: ${(props) => (props.$open ? `32px` : `48px`)};
    width: var(--line-width);
    height: 2px;
    background-color: var(--color-black);
    transition: all 0.3s ease-in-out;
    transform-style: preserve-3d;

    &:nth-child(1) {
      top: 16px;
    }

    &:nth-child(2) {
      top: 23px;
      width: calc(var(--line-width) - var(--line-width) * 0.1875);
    }

    &:nth-child(3) {
      top: 30px;
    }
  }
`;

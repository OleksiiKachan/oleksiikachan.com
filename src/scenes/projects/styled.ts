import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 40px 20px;
  }

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin: 0 0 40px;
  }

  > ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      gap: 40px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const ProjectCard = styled.article`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  hgroup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media only screen and (max-width: ${breakpoints.tabletMax}) {
      padding: 20px;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      padding: 80px 60px;
    }

    h2 {
      font-size: 4.2rem;
      margin: 0;

      @media only screen and (max-width: ${breakpoints.tabletMax}) {
        font-size: 2.4rem;
      }
    }

    p {
      margin: 15px 0;
      font-size: 1.6rem;
    }

    a {
      font-size: 1.6rem;
      font-weight: bold;
      padding: 10px 15px;
      transition: all 0.3s ease-in-out;
      position: relative;

      &:before {
        position: absolute;
        border: 2px solid var(--color-gold);
        display: block;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        background-color: var(--color-gold);
        color: var(--color-black);

        &:before {
          border: 2px solid var(--color-grey);
          transform: scaleX(1.1) scaleY(0.8) translateX(4px);
          transform: translateX(4px) translateY(4px);
          transform-origin: left top;
        }
      }
    }
  }
`;

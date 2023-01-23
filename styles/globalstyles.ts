import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #222831;
    --color-gold: #FFD369;
    --color-grey: #8A8A8A;
    --color-white: #EEEEEE;

    --svg-bg: transparent;
    --svg-border: var(--color-black);

    --content-max-width: 1440px;
  }

  html,
  body {
    font-size: 10px;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  .desktop-min {
    @media only screen and (max-width: ${breakpoints.tabletMax}) {
      display: none;
    }
  }

  .tablet-max {
    @media only screen and (min-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`;

export default GlobalStyle;

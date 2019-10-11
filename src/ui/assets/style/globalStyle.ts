import { createGlobalStyle } from 'styled-components';
import { fonts, breakpoints } from './variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');

  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
  margin: 0;
  padding: 0;
    box-sizing: border-box;
  }

body {
  font-family: ${fonts.body};width: 100%;
  height: 100%;
}

h1,
h2,
h3 {
  font-family: ${fonts.head};
}

h1 {
  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
    }
}

h2 {
  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
}
`;

export default GlobalStyle;

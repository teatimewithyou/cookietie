import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #777;
  background-color: rgb(239, 239, 239);
  min-height: 100vh;
}`;
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    z-index: 1;
    overflow-x: hidden;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Saira Semi Condensed', sans-serif;
    font-weight: 500;
    line-height: 105.4%;
    overflow-y: hidden;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

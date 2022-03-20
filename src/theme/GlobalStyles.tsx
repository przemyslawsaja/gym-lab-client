import { createGlobalStyle } from 'styled-components';
import { theme } from './MainTheme';

const GlobalTheme = {
  textColor: '#ffffff',
  fontSize: '62.5%'
}

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: ${ GlobalTheme.fontSize };  
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: ${ theme.colors.brand.background300};
    color: ${ GlobalTheme.textColor };
  }
`;

export default GlobalStyle;
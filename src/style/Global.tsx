import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: #e9dce3; 
    background-image: url('/images/n.png');
    background-repeat: no-repeat;
    background-size: 1920px 1080px;

  };

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

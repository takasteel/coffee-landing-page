import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #1f231e;
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Fira Code', monospace;
      color: white;
    }

    html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    body {
      ul {
        list-style-type: none;
      }
      a{
        text-decoration: none;
        /* transition: color 0.2s;w */
      }
      a:hover, a:focus {
        color: #dbb79a
      }
      button {
        cursor: pointer;
      }
    }
  }
`
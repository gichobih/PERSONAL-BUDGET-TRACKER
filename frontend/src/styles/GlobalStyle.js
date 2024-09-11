import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body {
    height: 100%;
    font-family: 'Nunito', sans-serif;
  }

  :root {
    height: 100%;
    width: 100%
  }
  h1, h2, h3, h4, h5,h6{
    color: var(--primary-color);
    
  }
  .error{
     color: red;
     animation: shake 0.5s ease-in-out;
     @keyframes shake{
            0%{
              transform: translateX(0);
            }
            25%{
              transform: translateX(10px);
            }
            50%{
              transform: translateX(-10px);
            }
            75%{
              transform: translateX(10px);
            }
           100%{
              transform: translateX(0px);
            }
     }
  }
`;

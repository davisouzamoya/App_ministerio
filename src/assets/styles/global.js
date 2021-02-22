import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      a{
        text-decoration: none;
        color: inherit; 
        display:grid
      }
   /* * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  } */

  body {
    background: #F0F2F5 ;
    font-family:'Sen',sans-serif;
  }

  /* body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }  */
`;

import  createGlobalStyle  from "styled-components";

export default createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      outline:0;
  }

  body{
    background:#312E28;
    color: #FFF;
    -webkit-font-smoothing:antialiased;
  }

  body,input,button {
    font-family: 'sans', sans-serif;
    font-size:16px
  }



`;

import styled from 'styled-components'


export const Profile = styled.div`
    display:grid;
    justify-content:center;
  
  div{
    display:grid;
    justify-content:center;
    img{
      
      margin-top:100px;
      width:180px;
      height:180px;
      border-radius:50%;
    }
    h1{
     text-align:center;
     margin-top:10px;
     margin-bottom:0px;
    }
  }
    

  textarea{
    margin-top:25px;
    resize: none;
    height:300px;
    width:90vw;
    border:0px;
    outline-style:none;
  }

  button{
    margin-top:10px;
    background: #56CCF2;
    border-radius: 10px;
    border: 2px solid #56CCF2;
    padding: 16px;
    width: 88vw;
    outline-style:none;
    margin-left:14px;
    color: black;
    text-transform: uppercase;
  }
`



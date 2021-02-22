import styled from 'styled-components'
import { shade } from "polished";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items:center;
    grid-row-gap: 10px;

    .teste{
      margin-left:10px;
      width:88vw;
      border-radius: 10px;
    }

    iframe{
      margin-left:10px;
      height:300px;
      width: 87vw;      
    }

    textarea{
      margin-left:14px;
      resize: none;
      height:300px;
      border:0px;
      outline-style:none;
    }

    button{
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
    button:hover {
      background: ${shade(0.1, "#56CCF2")};
    }
`



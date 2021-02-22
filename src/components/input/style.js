import styled from 'styled-components'

export const Container = styled.div`
  margin-top:110px;
  margin-left:10px;
  background: #56CCF2;
  border-radius: 10px;
  border: 2px solid #56CCF2;
  padding: 16px;
  width: 80vw;
  color: #666360;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline:none;
    color: black;
    font-size:18px;
    &::placeholder {
      color: #666360;
    }

    svg {
    margin-right: 16px;
    cursor:pointer;
    }
  }
`


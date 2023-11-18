import styled from 'styled-components';

import { Input as I } from 'pages/Login/Login.style'

export const Input = styled(I)`
 width: unset; 
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  button {
    padding: 8px;
    cursor: pointer;
  }

  div {
    display: flex;
    margin-top: 20px;

    input {
      padding: 8px;
      margin-right: 10px;
    }

    button {
      background-color: #4caf50;
      color: white;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  pre {
  margin-top: 50px;    
  }
`;

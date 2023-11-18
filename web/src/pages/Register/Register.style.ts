import styled from 'styled-components';

import * as Login from 'pages/Login/Login.style'

export const { Form, Input, Button, ErrorMessage } = Login

export const SignUpFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackToLoginLink = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

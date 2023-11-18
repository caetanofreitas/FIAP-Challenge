import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

interface InputProps {
  error: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => (props.error ? '#ff4d4f' : '#ccc')};
  border-radius: 4px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin: 10px 0;
`;

export const SignUpLink = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

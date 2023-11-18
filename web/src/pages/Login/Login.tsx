import { useCallback, useState } from 'react';
import {
  LoginFormWrapper,
  Form,
  Input,
  Button,
  ErrorMessage,
  SignUpLink,
} from './Login.style';
import { loginRequest } from 'services/login';
import { useNavigate } from 'react-router-dom';
import { routes } from 'constants/routes';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const nav = useNavigate()

  const handleLogin = useCallback(async () => {
    setEmailError('');
    setPasswordError('');
    if (!email) {
      setEmailError('Por favor, insira seu e-mail de usuário.');
      return
    }
    
    if (!password) {
      setPasswordError('Por favor, insira sua senha.');
      return
    } 

    if (password.length < 8) {
      setPasswordError('A senha deve ter no mínimo 8 caracteres.');
      return
    }

    const res = await loginRequest(email, password)
    if (res.statusCode === 200) {
      nav(routes.MAIN)
      return
    }

    setEmailError('Falha para realizar login, verifique seu e-mail e sua senha!')
    setPasswordError('Falha para realizar login, verifique seu e-mail e sua senha!');
  }, [email, nav, password]);

  const handleSignUpRedirect = () => nav(routes.REGISTER);

  return (
    <LoginFormWrapper>
      <Form>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <Button onClick={handleLogin}>Login</Button>
        <SignUpLink onClick={handleSignUpRedirect}>Cadastre-se</SignUpLink>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;

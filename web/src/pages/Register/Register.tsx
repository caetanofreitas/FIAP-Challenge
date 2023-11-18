import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SignUpFormWrapper,
  Form,
  Input,
  Button,
  BackToLoginLink,
  ErrorMessage,
} from './Register.style';

import { routes } from 'constants/routes';
import { registerRequest } from 'services/register';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const nav = useNavigate();

  const handleSignUp = useCallback(async () => {
    setEmailError('');
    setNameError('');
    setPasswordError('');
    if (!email) {
      setEmailError('Por favor, insira seu email.');
      return
    }

    if (!name) {
      setNameError('Por favor, insira seu nome.');
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

    const res = await registerRequest({ name, email, password })
    if (res.statusCode === 201) {
      nav(routes.MAIN)
      return
    }

    setEmailError('Falha para realizar cadastro, verifique os dados informados e tente novamente!')
    setPasswordError('Falha para realizar cadastro, verifique os dados informados e tente novamente!');
    setNameError('Falha para realizar cadastro, verifique os dados informados e tente novamente!');
  }, [email, name, nav, password]);

  const handleBackToLogin = () => nav(routes.LOGIN, {
    replace: true,
  });

  return (
    <SignUpFormWrapper>
      <Form>
        <h2>Cadastro</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!nameError}
        />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <Button onClick={handleSignUp}>Cadastrar</Button>
        <BackToLoginLink onClick={handleBackToLogin}>Voltar para o Login</BackToLoginLink>
      </Form>
    </SignUpFormWrapper>
  );
};

export default Register;

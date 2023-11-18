import { useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { routes } from '../../constants/routes';
import { registerRequest } from '../../services/register';

import { styles } from './Register.style';

const Register = ({ navigation: { navigate: nav } }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleBackToLogin = () => nav(routes.LOGIN);

  return (
    <View style={styles.formWrapper}>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={{
            ...styles.baseInput,
            ...(!!emailError ? styles.inputError : {})
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        <TextInput
          style={{
            ...styles.baseInput,
            ...(!!emailError ? styles.inputError : {})
          }}
          type="text"
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        {nameError && <Text style={styles.errorMessage}>{nameError}</Text>}
        <TextInput
          style={{
            ...styles.baseInput,
            ...(!!emailError ? styles.inputError : {})
          }}
          type="password"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError && <Text style={styles.errorMessage}>{passwordError}</Text>}
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleSignUp}>
          <Text style={styles.button}>
            Cadastrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBackToLogin}>
          <Text style={styles.backToLogin}>
            Voltar para o Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register
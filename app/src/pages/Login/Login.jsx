import { useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { routes } from '../../constants/routes';
import { loginRequest } from '../../services/login';

import { styles } from './Login.style';

const Login = ({ navigation: { navigate: nav } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    <View style={styles.formWrapper}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={{
            ...styles.baseInput,
            ...(!!emailError ? styles.inputError : {})
          }}
          type="text"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        <TextInput
          style={{
            ...styles.baseInput,
            ...(!!emailError ? styles.inputError : {})
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          error={!!passwordError}
          secureTextEntry
        />
        {passwordError && <Text style={styles.errorMessage}>{passwordError}</Text>}
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
          <Text style={styles.button}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUpRedirect}>
          <Text style={styles.signUpLink}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login
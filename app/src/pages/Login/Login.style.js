import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: 20,
    width: Dimensions.get('screen').width * 0.9,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },
  baseInput: {
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4d4f'
  },
  buttonWrapper: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#007bff',
    border: 'none',
    marginTop: 10,
  },
  button: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  errorMessage: {
    color: '#ff4d4f',
    fontSize: 16,
    marginVertical: 10,
  },
  signUpLink: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#007bff',
  }
})
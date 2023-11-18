import { Dimensions, StyleSheet } from "react-native";

import { styles as s } from '../Login/Login.style'

export const styles = StyleSheet.create({
  baseInput: s.baseInput,
  inputError: s.inputError,
  mainWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  },
  list: {
    width: Dimensions.get('screen').width * 0.9,
  },
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
  },
  checkboxChecked: {
    backgroundColor: 'green',
  },
  addTodoWrapper: {
    width: Dimensions.get('screen').width * 0.9,
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContainer: {
    ...s.buttonWrapper,
    backgroundColor: '#ccc'
  },
  button: s.button,
  addNewTodoInput: {
    ...s.baseInput,
    padding: 8,
    marginRight: 10,
    flex: 1,
  },
  addNewTodoButtonWrapper: {
    ...s.buttonWrapper,
    backgroundColor: '#4caf50',
    color: 'white',
  },
  addNewTodoButton: {
    ...s.button,
  }
})
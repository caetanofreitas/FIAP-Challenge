import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, SafeAreaView, Pressable } from 'react-native';

import { routes } from "../../constants/routes";
import { addTodosRequest, deleteTodosRequest, editTodosRequest, getTodosRequest, toggleTodosRequest } from '../../services/manageTodos';

import { styles } from './Main.style'

const Main = ({ navigation: { navigate: nav } }) => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const [showEdit, setShowEdit] = useState('');
  const [editedText, setEditedText] = useState('');

  const fetchTodos = async () => {
    const response = await getTodosRequest();
    if (response.statusCode !== 200) {
      console.error(response.error)
      return
    }
    setTodos(response.data ?? []);
  };

  const handleEdit = useCallback((id) => {
    setEditedText(todos.find(({ id: i }) => i === id)?.description ?? '')
    setShowEdit(p => p === id ? '' : id);
  }, [todos]);

  const handleSubmitEdit = useCallback(async (id) => {
    const res = await editTodosRequest({
      ...todos.find(({ id: i }) => i === id),
      description: editedText,
    })
    if (res.statusCode !== 200) {
      console.error('Fail to edit todo')
      return
    }
    setShowEdit('')
    setEditedText('')
    fetchTodos();
  }, [todos, editedText])


  const handleDelete = async (id) => {
    const res = await deleteTodosRequest(id)
    if (res.statusCode !== 200) {
      console.error('Fail to remove todo')
      return
    }
    fetchTodos();
  };

  const handleCheckboxChange = async (id) => {
    const res = await toggleTodosRequest(id)
    if (res.statusCode !== 200) {
      console.error('Fail to toggle todo')
      return
    }
    fetchTodos();
  };

  const handleAddTodo = useCallback(async () => {
    if (newTodoText.trim() !== '') {
      const res = await addTodosRequest(newTodoText)
      if (res.statusCode !== 201) {
        console.error('Fail to add todo')
        return
      }
      fetchTodos();
      setNewTodoText('');
    }
  }, [newTodoText])

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const hasToken = true;
    if (!hasToken) {
      nav(routes.LOGIN)
    }
  }, [])

  return  (
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.title}>To-do</Text>
      <FlatList 
        style={styles.list}
        data={todos}
        renderItem={({ item: todo }) => 
          <View style={styles.todoWrapper}>
            <Pressable 
              style={{
                ...styles.checkbox,
                ...(todo.checked  ? styles.checkboxChecked : {})
              }}
              value={todo.checked} 
              onPress={() => handleCheckboxChange(todo.id)} disabled={!!showEdit} 
            />
            {showEdit === todo.id ? <TextInput value={editedText} onChangeText={setEditedText} /> 
            : <Text style={styles.description}>{todo.description}</Text>}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => showEdit === todo.id ? handleSubmitEdit(todo.id) : handleEdit(todo.id)}>
                <Text style={styles.button}>
                  {showEdit === todo.id ? 'Salvar' : 'Editar'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => showEdit === todo.id ? handleEdit(todo.id) : handleDelete(todo.id)}>
                <Text style={styles.button}>
                  {showEdit === todo.id ? 'Cancelar' : 'Deletar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        keyExtractor={(i) => i.id}
      />
      <View style={styles.addTodoWrapper}>
        <TextInput
          style={styles.addNewTodoInput}
          placeholder="Novo To-Do"
          value={newTodoText}
          onChangeText={setNewTodoText}
        />
        <TouchableOpacity style={styles.addNewTodoButtonWrapper} onPress={handleAddTodo}>
          <Text style={styles.addNewTodoButton}>
            Adicionar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Main;

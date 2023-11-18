import { useCallback, useEffect, useState } from 'react';

import { MainWrapper, Input } from './Main.style';
import { addTodosRequest, deleteTodosRequest, editTodosRequest, getTodosRequest, toggleTodosRequest } from 'services/manageTodos';

export interface Todo {
  id: string;
  description: string;
  checked: boolean;
}

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const [showEdit, setShowEdit] = useState('');
  const [editedText, setEditedText] = useState('');

  const fetchTodos = async () => {
    const response = await getTodosRequest();
    if (response.statusCode !== 200) {
      console.error(response.error)
      return
    }
    setTodos(response.data as Todo[]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = useCallback((id: string) => {
    setEditedText(todos.find(({ id: i }) => i === id)?.description ?? '')
    setShowEdit(p => p === id ? '' : id);
  }, [todos]);

  const handleSubmitEdit = useCallback(async (id: string) => {
    const res = await editTodosRequest({
      ...todos.find(({ id: i }) => i === id) as Todo,
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

  const handleDelete = async (id: string) => {
    const res = await deleteTodosRequest(id)
    if (res.statusCode !== 200) {
      console.error('Fail to remove todo')
      return
    }
    fetchTodos();
  };

  const handleCheckboxChange = async (id: string) => {
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

  return (
    <MainWrapper>
      <h2>Main</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheckboxChange(todo.id)}
              disabled={!!showEdit}
            />
            {showEdit === todo.id ? <Input value={editedText} onChange={(e) => setEditedText(e.target.value)} error={false} /> : todo.description}
            <button onClick={() => showEdit === todo.id ? handleSubmitEdit(todo.id) : handleEdit(todo.id)}>{showEdit === todo.id ? 'Salvar' : 'Editar'}</button>
            <button onClick={() => showEdit === todo.id ? handleEdit(todo.id) : handleDelete(todo.id)}>{showEdit === todo.id ? 'Cancelar' : 'Deletar'}</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Novo To-Do"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Adicionar</button>
      </div>
      <pre>Desculpe a falta de criatividade :)</pre>
    </MainWrapper>
  );
};

export default Main;

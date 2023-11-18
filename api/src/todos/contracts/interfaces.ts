import { TodoModel } from 'models/Todos';
import { AddTodoDTO, EditTodoDTO } from './dto';

export interface ITodoRepository {
  addTodo(model: TodoModel): Promise<string>;
  editTodo(model: TodoModel): Promise<string>;
  removeTodo(id: string): Promise<boolean>;
  getTodo(id: string): Promise<TodoModel>;
  getTodosFromUser(id: string): Promise<TodoModel[]>;
}

export interface ITodoService {
  getTodosFromUser(id: string): Promise<TodoModel[]>;
  addTodo(model: AddTodoDTO, token: string): Promise<string>;
  toggleTodo(id: string, token: string): Promise<boolean>;
  editTodo(model: EditTodoDTO, token: string): Promise<string>;
  removeTodo(id: string, token: string): Promise<boolean>;
}

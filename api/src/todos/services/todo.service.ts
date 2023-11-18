import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'auth/services';
import { TodoModel } from 'models/Todos';
import { UserModel } from 'models/User';

import { ITodoService, AddTodoDTO, EditTodoDTO } from 'todos/contracts';
import { TodosRepository } from 'todos/repository';

@Injectable()
export class TodosService implements ITodoService {
  constructor(
    private readonly repo: TodosRepository,
    private readonly authService: AuthService,
  ) {}

  async getTodosFromUser(token: string): Promise<TodoModel[]> {
    const user = await this.authService.getUserFromToken(token);
    if (!user) throw new NotFoundException();
    return this.repo.getTodosFromUser(user.id);
  }

  async addTodo(model: AddTodoDTO, token: string): Promise<string> {
    const user = await this.authService.getUserFromToken(token);
    if (!user) throw new UnauthorizedException();
    return this.repo.addTodo({
      checked: false,
      description: model.description,
      user: user.id,
    });
  }

  async toggleTodo(id: string, token: string): Promise<boolean> {
    const user = await this.authService.getUserFromToken(token);
    if (!user) throw new UnauthorizedException();

    const todo = await this.repo.getTodo(id);
    if (!todo) throw new NotFoundException();

    if ((todo.user as UserModel).id !== user.id) throw new NotFoundException();

    todo.checked = !todo.checked;
    await this.repo.editTodo(todo);
    return true;
  }

  async editTodo(model: EditTodoDTO, token: string): Promise<string> {
    const user = await this.authService.getUserFromToken(token);
    if (!user) throw new UnauthorizedException();

    const todo = await this.repo.getTodo(model.id);
    if (!todo) throw new NotFoundException();

    if ((todo.user as UserModel).id !== user.id) throw new NotFoundException();

    return this.repo.editTodo({
      ...todo,
      ...model,
    });
  }

  async removeTodo(id: string, token: string): Promise<boolean> {
    const user = await this.authService.getUserFromToken(token);
    if (!user) throw new UnauthorizedException();

    const todo = await this.repo.getTodo(id);
    if (!todo) throw new NotFoundException();

    if ((todo.user as UserModel).id !== user.id) throw new NotFoundException();

    return this.repo.removeTodo(id);
  }
}

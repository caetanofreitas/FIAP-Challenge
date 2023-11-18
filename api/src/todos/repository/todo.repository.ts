import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ITodoRepository } from 'todos/contracts';
import { TodoModel } from 'models/Todos';

@Injectable()
export class TodosRepository implements ITodoRepository {
  constructor(
    @InjectRepository(TodoModel)
    private readonly repo: Repository<TodoModel>,
  ) {}

  async addTodo(model: TodoModel): Promise<string> {
    const todo = await this.repo.save(model);
    return todo.id as string;
  }

  async editTodo(model: TodoModel): Promise<string> {
    const todo = await this.repo.save(model);
    return todo.id as string;
  }

  async removeTodo(id: string): Promise<boolean> {
    const op = await this.repo.delete({ id });
    return op.affected > 0;
  }

  getTodo(id: string): Promise<TodoModel> {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  getTodosFromUser(id: string): Promise<TodoModel[]> {
    return this.repo
      .createQueryBuilder('t')
      .where('t.user = :id', { id })
      .getMany();
  }
}

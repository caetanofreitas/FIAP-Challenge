import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { GetCurrentUserToken } from 'shared/decorators';
import { AddTodoDTO, EditTodoDTO } from 'todos/contracts';

import { TodosService } from 'todos/services';

@ApiTags('Todo')
@ApiCookieAuth()
@Controller('/todo')
export class TodosController {
  constructor(private readonly srv: TodosService) {}

  @Get()
  async getAll(@GetCurrentUserToken() token: string) {
    return this.srv.getTodosFromUser(token);
  }

  @Post()
  async addTodo(
    @GetCurrentUserToken() token: string,
    @Body() content: AddTodoDTO,
  ) {
    return this.srv.addTodo(content, token);
  }

  @Patch('/:id')
  async toggleTodo(
    @Param('id') id: string,
    @GetCurrentUserToken() token: string,
  ) {
    return this.srv.toggleTodo(id, token);
  }

  @Put()
  async editTodo(
    @GetCurrentUserToken() token: string,
    @Body() todo: EditTodoDTO,
  ) {
    return this.srv.editTodo(todo, token);
  }

  @Delete('/:id')
  async deleteTodo(
    @Param('id') id: string,
    @GetCurrentUserToken() token: string,
  ) {
    return this.srv.removeTodo(id, token);
  }
}

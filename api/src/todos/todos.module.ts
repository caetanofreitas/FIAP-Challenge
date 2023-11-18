import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoModel } from 'models/Todos';
import { AuthModule } from 'auth/auth.module';

import { TodosController } from './http';
import { TodosService } from './services';
import { TodosRepository } from './repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodoModel]), AuthModule],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository],
})
export class TodosModule {}

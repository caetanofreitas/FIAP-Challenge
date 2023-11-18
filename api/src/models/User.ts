import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { IsUUID } from 'class-validator';
import { TodoModel } from './Todos';

@Entity('T_USER')
export class UserModel {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at?: Date | string;

  @UpdateDateColumn()
  updated_at?: Date | string;

  @OneToMany(() => TodoModel, (t: TodoModel) => t.user)
  todos?: TodoModel[];
}

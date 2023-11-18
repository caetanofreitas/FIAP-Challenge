import { IsUUID } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserModel } from './User';

@Entity('T_TODO')
export class TodoModel {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  description: string;

  @Column()
  checked: boolean;

  @CreateDateColumn()
  created_at?: Date | string;

  @UpdateDateColumn()
  updated_at?: Date | string;

  @ManyToOne(() => UserModel, (u: UserModel) => u.todos, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: string | UserModel;
}

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { IUserRepository } from 'auth/contracts';
import { UserModel } from 'models/User';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly repo: Repository<UserModel>,
  ) {}

  getUserByEmail(email: string): Promise<UserModel> {
    return this.repo.findOne({ where: { email } });
  }

  getUserById(id: string): Promise<UserModel> {
    return this.repo.findOne({ where: { id } });
  }

  saveUserData(body: UserModel): Promise<UserModel> {
    return this.repo.save(body);
  }

  async deleteUserData(id: string): Promise<boolean> {
    const op = await this.repo.delete({ id });
    return op.affected > 0;
  }
}

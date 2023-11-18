import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';

import { IAuthRepository } from 'auth/contracts';
import { SessionModel } from 'models/Session';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(SessionModel)
    private readonly repo: Repository<SessionModel>,
  ) {}

  async saveAuthToken(
    secret: string,
    id?: string,
  ): Promise<SessionModel | undefined> {
    const deleted_at = new Date();
    deleted_at.setDate(deleted_at.getDate() + 7);

    const tk = this.repo.create({
      id,
      secret,
      deleted_at,
    });
    const dt = await this.repo.save(tk);
    return dt;
  }

  async getSession(id: string): Promise<SessionModel> {
    const data = await this.repo
      .createQueryBuilder('s')
      .withDeleted()
      .where('s.deleted_at >= :actual_date', { actual_date: new Date() })
      .andWhere('s.id = :id', { id })
      .getOne();
    if (!data) {
      throw EntityNotFoundError;
    }
    return data;
  }

  async deleteAuthToken(id: string): Promise<boolean> {
    const op = await this.repo.delete({ id });
    return op.affected > 0;
  }
}

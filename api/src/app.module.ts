import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { HealthModule } from 'health/health.module';
import { AuthModule } from 'auth/auth.module';
import { TodosModule } from 'todos/todos.module';
import { entities } from './models';
import { AuthGuard } from 'shared/guards';
import { AuthStrategy } from 'shared/strategies/auth.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: 'sql.db',
        synchronize: true,
        autoLoadEntities: true,
        entities,
        uuidExtension: 'uuid-ossp',
      }),
    }),
    JwtModule.register({}),
    HealthModule,
    AuthModule,
    TodosModule,
  ],
  providers: [
    AuthStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}

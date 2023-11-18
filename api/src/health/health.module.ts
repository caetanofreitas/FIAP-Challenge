import { Module } from '@nestjs/common';

import { HealthController } from './http';
import { HealthService } from './service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}

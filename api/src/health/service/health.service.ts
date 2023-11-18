import { Injectable } from '@nestjs/common';

import { IHealthService } from 'health/contracts';

@Injectable()
export class HealthService implements IHealthService {
  getHealth(): string {
    return 'Service Up!';
  }
}

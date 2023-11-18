import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IHealthController } from 'health/contracts';
import { HealthService } from 'health/service';

@ApiTags('Health')
@Controller('/health')
export class HealthController implements IHealthController {
  constructor(private readonly srv: HealthService) {}

  @Get()
  exec() {
    return this.srv.getHealth();
  }
}

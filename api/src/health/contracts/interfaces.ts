export interface IHealthController {
  exec(): string;
}

export interface IHealthService {
  getHealth(): string;
}

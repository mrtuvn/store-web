import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello2();
  }

  @Get()
  getBye(): string {
    return 'Byebye';
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}

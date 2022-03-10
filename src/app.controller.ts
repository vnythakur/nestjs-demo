import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CountParam } from './validators/count.validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get(':count')
  getFizzBuzz(
    @Param() {count}: CountParam
  ) {
    const res  = this.appService.getFizzBuzz(count);
    return res;
  }
}

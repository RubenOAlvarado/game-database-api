import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/games')
  getHello(@Query('search') search: string) {
    return this.appService.getGames(search);
  }
}

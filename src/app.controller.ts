import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/games')
  getHello(@Query('search') search: string) {
    return this.appService.getGames(search);
  }

  @Get('/games/:slug')
  getGameDetails(@Param('slug') slug: string) {
    return this.appService.getGameDetails(slug);
  }
}

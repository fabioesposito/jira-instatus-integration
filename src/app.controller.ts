import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createIncident(): string {
    return this.appService.createIncident();
  }

  @Post()
  addComment(): string {
    return this.appService.addComment();
  }

  @Put()
  updateIncident(): string {
    return this.appService.updateIncident();
  }
}

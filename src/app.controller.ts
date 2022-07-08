import { Body, Controller, Post, Put } from '@nestjs/common';
import { JiraTicket } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/incidents')
  createIncident(@Body() jira: JiraTicket): string {
    return this.appService.createIncident(jira);
  }

  @Put('/incidents')
  updateIncident(@Body() jira: JiraTicket): string {
    return this.appService.updateIncident(jira);
  }
}

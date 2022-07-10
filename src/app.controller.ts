import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JiraTicket } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/incidents')
  createIncident(@Body() jira: JiraTicket): Observable<any> {
    return this.appService.createIncident(jira);
  }

  @Post('/incidents/update')
  updateIncident(@Body() jira: JiraTicket): Observable<any> {
    return this.appService.updateIncident(jira);
  }
}

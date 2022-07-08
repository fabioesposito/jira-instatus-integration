import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ComponentStatusType, IncidentStatusType, InstatusIncident, JiraTicket } from './app.model';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  apiURL = 'https://api.instatus.com/';

  createIncident(jira: JiraTicket): string {
    console.log(jira);

    const incident: InstatusIncident = {
      name: jira.summary,
      message: jira.message,
      components: jira.components,
      started: new Date(),
      resolved: null,
      status: IncidentStatusType[jira.status],
      notify: true,
      statuses: {
        id: jira.components[0],
        status: ComponentStatusType[jira.componentStatus],
      },
    };

    console.log(incident);
    //this.httpService.post(this.apiURL, incident);

    return 'OK';
  }

  updateIncident(jira: JiraTicket): string {
    console.log(jira);

    const incident: InstatusIncident = {
      name: jira.summary,
      message: jira.message,
      components: jira.components,
      started: new Date(),
      resolved: null,
      status: IncidentStatusType[jira.status],
      notify: true,
      statuses: {
        id: jira.components[0],
        status: ComponentStatusType[jira.componentStatus],
      },
    };

    console.log(incident);
    //this.httpService.post(this.apiURL, incident);

    return 'OK';
  }

  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }
}

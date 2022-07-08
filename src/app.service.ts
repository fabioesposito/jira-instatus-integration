import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  ComponentStatusType,
  IncidentStatusType,
  InstatusIncident,
  JiraTicket,
} from './app.model';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  apiURL = 'https://api.instatus.com';
  apiKey = process.env.INSTATUS_APIKEY || 'missing-api-key';
  apiConfig = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    },
  };

  createIncident(jira: JiraTicket): string {
    console.log(jira);

    const pageID = jira.instatusPageID;

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
    this.httpService.post(`${this.apiURL}/v1/${pageID}/incidents`, incident);

    return 'OK';
  }

  updateIncident(jira: JiraTicket): string {
    console.log(jira);

    const pageID = jira.instatusPageID;
    const activeIncidentID = jira.instatusIncientID;

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
    this.httpService.put(
      `${this.apiURL}/v1/${pageID}/incidents/${activeIncidentID}`,
      incident,
    );

    return 'OK';
  }
}

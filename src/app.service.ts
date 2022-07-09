import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
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

  createIncident(jira: JiraTicket): Observable<any> {
    const pageID = jira.instatusPageID;
    const incident: InstatusIncident = mapJiraToIncident(jira);
    incident.started = new Date();

    console.log(incident);

    const data = this.httpService
      .post(`${this.apiURL}/v1/${pageID}/incidents`, incident, this.apiConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );

    return data;
  }

  updateIncident(jira: JiraTicket): Observable<any> {
    console.log(jira);

    const pageID = jira.instatusPageID;
    const activeIncidentID = jira.instatusIncidentID;

    const incident: InstatusIncident = mapJiraToIncident(jira);
    if (IncidentStatusType[jira.status] === IncidentStatusType.RESOLVED) {
      incident.resolved = new Date();
    }

    console.log(incident);

    const data = this.httpService
      .post(
        `${this.apiURL}/v1/${pageID}/incidents/${activeIncidentID}/incident-updates`,
        incident,
        this.apiConfig,
      )
      .pipe(
        map((res) => {
          return res.data;
        }),
      );

    return data;
  }
}

function mapJiraToIncident(jira: JiraTicket): InstatusIncident {
  const incident: InstatusIncident = {
    name: jira.summary,
    message: jira.message,
    components: jira.components,
    status: IncidentStatusType[jira.status],
    notify: true,
    statuses: [
      {
        id: jira.components[0],
        status: ComponentStatusType[jira.componentStatus],
      },
    ],
  };
  return incident;
}

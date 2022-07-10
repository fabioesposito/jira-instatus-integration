import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { InstatusIncident, JiraTicket } from './app.model';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  apiURL = 'https://api.instatus.com';
  apiKey = process.env.INSTATUS_APIKEY || 'missing-api-key';
  apiConfig = {
    headers: {
      //'Content-type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    },
  };

  createIncident(jira: JiraTicket): Observable<any> {
    const pageID = jira.instatusPageID;
    const incident: InstatusIncident = new InstatusIncident(jira);
    incident.started = new Date();

    console.log(incident);

    const data = this.httpService
      .post(`${this.apiURL}/v1/${pageID}/incidents`, incident, this.apiConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
        catchError((error) => {
          return throwError(() => new Error(error));
        }),
      );

    return data;
  }

  updateIncident(jira: JiraTicket): Observable<any> {
    const pageID = jira.instatusPageID;
    const activeIncidentID = jira.instatusIncidentID;

    const incident: InstatusIncident = new InstatusIncident(jira);
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
        catchError((error) => {
          return throwError(() => new Error(error));
        }),
      );

    return data;
  }
}

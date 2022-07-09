export class JiraTicket {
  summary: string;
  message: string;
  components: Array<string>;
  created: Date;
  resolved?: Date;
  status: string;
  componentStatus: string;
  instatusPageID: string;
  instatusIncidentID: string;
}

export class InstatusIncident {
  name?: string;
  message: string;
  components: Array<string>;
  started?: Date;
  status: IncidentStatusType;
  notify: boolean;
  statuses: Array<ComponentStatus>;

  constructor(jira: JiraTicket) {
    const incident: InstatusIncident = {
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

    if (jira.summary !== '') {
      incident.name = jira.summary;
    }

    return incident;
  }
}

export class ComponentStatus {
  id: string;
  status: ComponentStatusType;
}

export enum IncidentStatusType {
  INVESTIGATING = 'INVESTIGATING',
  IDENTIFIED = 'IDENTIFIED',
  MONITORING = 'MONITORING',
  RESOLVED = 'RESOLVED',
}

export enum ComponentStatusType {
  OPERATIONAL = 'OPERATIONAL',
  UNDERMAINTENANCE = 'UNDERMAINTENANCE',
  DEGRADEDPERFORMANCE = 'DEGRADEDPERFORMANCE',
  PARTIALOUTAGE = 'PARTIALOUTAGE',
  MAJOROUTAGE = 'MAJOROUTAGE',
}

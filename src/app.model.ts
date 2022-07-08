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
  name: string;
  message: string;
  components: Array<string>;
  started?: Date;
  resolved?: Date;
  status: IncidentStatusType;
  notify: boolean;
  statuses: Array<ComponentStatus>;
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

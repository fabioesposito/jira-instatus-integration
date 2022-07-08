interface Incident {
  name: string;
  message: string;
  components: [];
  started: Date;
  status: string;
  notify: boolean;
}

interface ComponentStatus {
  id: string;
  status: string;
}

enum IncidentStatusType {
  INVESTIGATING,
  IDENTIFIED,
  MONITORING,
  RESOLVED,
}

enum ComponentStatusType {
  OPERATIONAL,
  UNDERMAINTENANCE,
  DEGRADEDPERFORMANCE,
  PARTIALOUTAGE,
  MAJOROUTAGE,
}

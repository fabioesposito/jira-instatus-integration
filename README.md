# Jira-Instatus integration

Exposes the [Instatus API](https://instatus.com/help/api) for incidents and incidents updates, to be called from Jira automations

## How to run
```
export INSTATUS_APIKEY="your-api-key"
npm i
npm run start:dev
```

## Available Endpoints

```
POST /incidents
{
  "summary": "{{issue.summary}}",
  "message": "We're currently investigating an issue with the tl;dv Platform",
  "components": ["your-component-ids"],
  "status": "INVESTIGATING",
  "componentStatus": "OPERATIONAL",
  "instatusPageID": "your-instatus-page-id"
}
```

```
POST /incidents/timeline
{
  "summary": "{{issue.summary}}",
  "message": "The issue has been identified, we are working on a fix",
  "components": ["your-component-ids"],
  "status": "IDENTIFIED",
  "componentStatus": "PARTIALOUTAGE",
  "instatusPageID": "your-instatus-page-id"
  "instatusIncidentID": "incident-id-on-jira"
}
```

Possible component statuses:
```
OPERATIONAL  
DEGRADEDPERFORMANCE  
PARTIALOUTAGE  
MAJOROUTAGE  
```

Possible incident statuses:
```
INVESTIGATING  
IDENTIFIED  
MONITORING  
RESOLVED  
```
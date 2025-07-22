---
layout: extension
title: Data Responsibility Extension 25-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: dataResponsibility
description: Schema for Data Responsibility
permalink: /extensions/dataResponsibility/2025-07.01/
---

## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `dataGeneratorName` | string | No | Name of the person responsible for generating the PCF data |
| `dataGeneratorEmail` | string | No | Email address of the person responsible for generating the PCF data |
| `dataEntryName` | string | No | Name of the person responsible for entering the PCF data into the system |
| `dataEntryEmail` | string | No | Email address of the person responsible for entering the PCF data into the system |
| `dataReviewerName` | string | No | Name of the person responsible for reviewing the PCF data |
| `dataReviewerEmail` | string | No | Email address of the person responsible for reviewing the PCF data |


## Example Usage

```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "dataGeneratorName": "Dr. Sarah Johnson",
    "dataGeneratorEmail": "s.johnson@sustainablecorp.com",
    "dataEntryName": "Michael Chen",
    "dataEntryEmail": "m.chen@sustainablecorp.com",
    "dataReviewerName": "Prof. Elena Rodriguez",
    "dataReviewerEmail": "e.rodriguez@university.edu"
  }
}
```


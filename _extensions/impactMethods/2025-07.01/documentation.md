---
layout: extension
title: Impact Methods 2025-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: impactMethods
description: Schema for Impact Methods
permalink: /extensions/impactMethods/2025-07.01/
---


## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `impactMethods` | string | No | Text description of the impact assessment methods, methodologies, or frameworks used |

## Example Usage

```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "impactMethods": "Impact assessment following ISO 14040/14044 principles using ReCiPe 2016 v1.1 methodology. Climate change assessment based on IPCC AR6 GWP100 characterization factors. Inventory modeling aligned with ILCD Handbook recommendations."
  }
}
```

---
layout: extension
title: Uncertainty Assessment 2025-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: uncertaintyAssessment
description: Schema for Uncertainty Assessment
permalink: /extensions/uncertaintyAssessment/2025-07.01/
---
## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `description` | string | Yes | Text description of the uncertainty assessment methodology, confidence levels, or variability analysis |


## Example Usage

```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "description": "Monte Carlo simulation with 10,000 iterations. 95% confidence interval: ±15% of reported value. Primary uncertainty sources: electricity grid mix (±8%), transportation distances (±12%), and process efficiency (±5%)."
  }
}
```

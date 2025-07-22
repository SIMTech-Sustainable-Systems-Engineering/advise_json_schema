---
layout: extension
title: Activity Name Extension 2025-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: activityName
description: Schema for activity name definitions and classifications
permalink: /extensions/activityName/2025-07.01/
---
## Schema Properties

### Required Properties

#### activityName
- **Type**: String (minimum length: 1)
- **Description**: The name of the datapoint or process used to generate the product
- **Examples**: 
  - `"Steel Production - Electric Arc Furnace"`
  - `"Transportation - Road Freight"`
  - `"Electricity Generation - Solar PV"`
  - `"Aluminum Smelting - Primary"`
  - `"Packaging - Cardboard Box Manufacturing"`

## Example Usage

### Manufacturing Process
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "activityName": "Steel Production - Electric Arc Furnace"
  }
}
```

### Transportation Process
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "activityName": "Transportation - Road Freight, 40t truck, Euro 6"
  }
}
```

### Energy Generation
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "activityName": "Electricity Generation - Natural Gas Combined Cycle"
  }
}
```

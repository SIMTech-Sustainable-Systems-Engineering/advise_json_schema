---
layout: extension
title: Activity Name Extension
version: 0.1.0
extension_name: activityName
description: Schema for activity name definitions and classifications
permalink: /schemas/0.1.0/activityName/
---

# Activity Name Extension

This extension provides the specific name of the datapoint or process used to generate the product, enabling clear identification of the activity associated with the carbon footprint data.

## Purpose

The Activity Name Extension enables:
- **Process identification**: Clear naming of the specific process or activity
- **Data traceability**: Link carbon footprint data to specific named processes
- **Process mapping**: Support for detailed process flow documentation
- **Data organization**: Categorize and organize data points by activity names
- **Reporting clarity**: Provide human-readable process names for reports

## Use Cases

- **Process documentation**: Document specific manufacturing processes or activities
- **Supply chain mapping**: Identify individual processes within complex supply chains
- **Data analysis**: Group and analyze carbon footprints by activity type
- **Audit trails**: Provide clear process names for verification and auditing
- **Reporting**: Generate detailed reports with specific process names

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
  "dataSchema": "https://your-domain.com/schemas/{{page.version}}/activityName/schema.json",
  "documentation":"https://your-domain.com/schemas/{{page.version}}/activityName",
  "data": {
    "activityName": "Steel Production - Electric Arc Furnace"
  }
}
```

### Transportation Process
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/{{page.version}}/activityName/schema.json",
  "documentation":"https://your-domain.com/schemas/{{page.version}}/activityName",
  "data": {
    "activityName": "Transportation - Road Freight, 40t truck, Euro 6"
  }
}
```

### Energy Generation
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/{{page.version}}/activityName/schema.json",
  "documentation":"https://your-domain.com/schemas/{{page.version}}/activityName",
  "data": {
    "activityName": "Electricity Generation - Natural Gas Combined Cycle"
  }
}
```

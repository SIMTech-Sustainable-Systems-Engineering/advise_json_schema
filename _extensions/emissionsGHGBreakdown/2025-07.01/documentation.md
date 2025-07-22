---
layout: extension
title: GHG emissions Breakdown
version: 2025-07.01
release_date: 2025-07-22
extension_name: emissionsGHGBreakdown
description: Schema for GHG Emissions Breakdown
permalink: /extensions/emissionsGHGBreakdown/2025-07.01/
---

## Schema Properties

All properties are optional string values that must conform to the PositiveOrZeroDecimal pattern: `^[+]?\d+(\.\d+)?$`

### Gas Types

#### CO2 (Carbon Dioxide)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Carbon dioxide emissions, typically the largest component of GHG emissions
- **Examples**: `"1250.5"`, `"0"`, `"45.123"`

#### CH4 (Methane)
- **Type**: String (PositiveOrZeroDecimal pattern)  
- **Description**: Methane emissions, with high global warming potential
- **Examples**: `"12.4"`, `"0.05"`, `"125"`

#### N2O (Nitrous Oxide)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Nitrous oxide emissions, significant in agricultural and combustion processes
- **Examples**: `"5.2"`, `"0.1"`, `"18.75"`

#### HFC (Hydrofluorocarbons)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Hydrofluorocarbon emissions, commonly from refrigeration and air conditioning
- **Examples**: `"2.8"`, `"0"`, `"0.005"`

#### PFC (Perfluorocarbons)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Perfluorocarbon emissions, typically from aluminum production and semiconductor manufacturing
- **Examples**: `"0.3"`, `"0"`, `"1.25"`

#### SF6 (Sulfur Hexafluoride)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Sulfur hexafluoride emissions, commonly from electrical equipment
- **Examples**: `"0.1"`, `"0"`, `"0.025"`

#### NF3 (Nitrogen Trifluoride)
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Nitrogen trifluoride emissions, typically from semiconductor and solar panel manufacturing
- **Examples**: `"0.05"`, `"0"`, `"0.001"`

## Example Usage

### Manufacturing Process Breakdown
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "CO2": "1250.5",
    "CH4": "12.4",
    "N2O": "5.2",
    "HFC": "0",
    "PFC": "0",
    "SF6": "0",
    "NF3": "0"
  }
}
```

### Refrigeration Equipment
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "CO2": "85.2",
    "CH4": "0.1",
    "N2O": "0.05",
    "HFC": "15.8",
    "PFC": "0",
    "SF6": "0",
    "NF3": "0"
  }
}
```

### Aluminum Production
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "CO2": "2150.0",
    "CH4": "8.5",
    "N2O": "2.1",
    "HFC": "0",
    "PFC": "25.3",
    "SF6": "0.2",
    "NF3": "0"
  }
}
```

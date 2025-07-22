---
layout: extension
title: Emissions Scope Breakdown 2025-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: emissionsScopeBreakdown
description: Schema for GHG Emissions Scope Breakdown
permalink: /extensions/emissionsScopeBreakdown/2025-07.01/
---

## Schema Properties

### Optional Properties

#### description
- **Type**: String
- **Description**: Description of the scope breakdown methodology, assumptions, or context
- **Examples**: 
  - `"Breakdown based on GHG Protocol Corporate Standard"`
  - `"Includes estimated Scope 3 categories 1-15"`
  - `"Location-based method used for Scope 2 emissions"`

#### Scope1
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Direct GHG emissions from sources owned or controlled by the organization
- **Includes**: 
  - Combustion of fuels in owned/controlled equipment
  - Process emissions from owned/controlled operations
  - Fugitive emissions from owned/controlled equipment
- **Examples**: `"1250.5"`, `"0"`, `"45.123"`

#### Scope2
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: Indirect GHG emissions from the generation of purchased electricity, steam, heating, and cooling
- **Includes**:
  - Purchased electricity consumption
  - Purchased steam, heating, and cooling
- **Examples**: `"850.2"`, `"125.75"`, `"0"`

#### Scope3
- **Type**: String (PositiveOrZeroDecimal pattern)
- **Description**: All other indirect GHG emissions that occur in the value chain of the organization
- **Includes**:
  - Purchased goods and services
  - Transportation and distribution
  - Business travel and employee commuting
  - End-of-life treatment of products
  - And 11 other GHG Protocol categories
- **Examples**: `"2150.8"`, `"500.25"`, `"0"`

## Example Usage

### Manufacturing Company
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "description": "Scope breakdown following GHG Protocol Corporate Standard, including estimated Scope 3 categories 1-15",
    "Scope1": "1250.5",
    "Scope2": "850.2",
    "Scope3": "2150.8"
  }
}
```

### Service Company
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "description": "Location-based method for Scope 2, limited Scope 1 due to office-based operations",
    "Scope1": "25.3",
    "Scope2": "180.7",
    "Scope3": "950.2"
  }
}
```

### Product-Specific Assessment
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "description": "Product-level scope allocation based on activity-based costing methodology",
    "Scope1": "5.8",
    "Scope2": "12.4",
    "Scope3": "35.6"
  }
}
```

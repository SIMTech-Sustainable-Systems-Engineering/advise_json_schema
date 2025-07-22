---
layout: extension
title: Economic Data Extension 25-07.01
version: 2025-07.01
release_date: 2025-07-22
extension_name: economic
description: Schema for Economic Data
permalink: /extensions/economic/2025-07.01/
---
## Schema Properties

### Top-level Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `baseYear` | string | No | Base year for economic calculations (YYYY format) |
| `currency` | string | No | Currency code in ISO 4217 format (e.g., USD, EUR, GBP) |
| `additionalEconomicInformation` | string | No | Additional text information about economic assumptions |

### CAPEX (Capital Expenditure)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `lifespan` | string | No | Asset lifespan in years (positive non-zero decimal) |
| `capacity` | string | No | Production capacity (positive non-zero decimal) |
| `initialCAPEX` | string | No | Initial capital expenditure (positive or zero decimal) |
| `recurringCAPEX` | object | No | Recurring capital expenditure information |
| `recurringCAPEX.amount` | string | No | Recurring CAPEX amount (positive non-zero decimal) |
| `recurringCAPEX.frequencyValue` | string | No | Frequency value for recurring CAPEX |
| `recurringCAPEX.frequencyUnit` | string | No | Unit of frequency (years, months, weeks, days) |
| `technologyFactor` | string | No | Technology factor affecting CAPEX |
| `description` | string | No | Description of CAPEX assumptions |

### OPEX (Operating Expenditure)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `fixed` | string | No | Fixed operating costs (positive or zero decimal) |
| `variable` | string | No | Variable operating costs (positive or zero decimal) |
| `description` | string | No | Description of OPEX assumptions |

### EOL (End-of-Life)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `decommissioning` | string | No | Decommissioning costs |
| `disposalInspetions` | string | No | Disposal inspection costs |
| `dismantlingLabour` | string | No | Dismantling labor costs |
| `wasteDisposal` | string | No | Waste disposal costs |
| `siteRemediation` | string | No | Site remediation costs |
| `contractualHandover` | string | No | Contractual handover costs |
| `otherCost` | string | No | Other end-of-life costs |
| `description` | string | No | Description of EOL cost assumptions |

### Residual Value

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `land` | string | No | Residual value of land |
| `asset` | string | No | Residual value of assets |
| `material` | string | No | Residual value of materials |
| `other` | string | No | Other residual values |
| `description` | string | No | Description of residual value assumptions |

### Product Pricing

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `unitSellingPrice` | string | No | Unit selling price |
| `priceBasis` | string | No | Pricing basis using Incoterms |
| `MOQ` | string | No | Minimum order quantity |
| `priceValidityPeriod` | string | No | Price validity period description |
| `volumeDiscounts` | boolean | No | Whether volume discounts are available |
| `volumeDiscountsStructure` | string | No | Description of volume discount structure |
| `description` | string | No | Additional product pricing information |


## Example Usage

```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}/schema.json",
  "documentation":"https://your-domain.com/extensions/{{page.extension_name}}/{{page.version}}",
  "data": {
    "baseYear": "2023",
    "currency": "USD",
    "CAPEX": {
      "lifespan": "25.0",
      "initialCAPEX": "500000.00",
      "description": "Manufacturing equipment with 25-year lifespan"
    },
    "OPEX": {
      "fixed": "50000.00",
      "variable": "2.50",
      "description": "Annual fixed costs and variable cost per unit"
    },
    "productPricing": {
      "unitSellingPrice": "125.00",
      "priceBasis": "Ex-Works (EXW)",
      "volumeDiscounts": true
    }
  }
}
```

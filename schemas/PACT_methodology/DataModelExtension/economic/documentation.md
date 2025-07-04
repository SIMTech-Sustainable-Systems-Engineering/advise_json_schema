# Economic Extension

## Overview

The Economic extension provides comprehensive economic data for Product Carbon Footprint calculations, including capital expenditure (CAPEX), operating expenditure (OPEX), end-of-life costs, residual values, and product pricing information. This extension enables detailed economic analysis alongside environmental impact assessment.

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

## Use Cases

- **Life Cycle Costing (LCC)**: Complete economic assessment alongside LCA
- **Investment Analysis**: CAPEX and OPEX analysis for sustainability investments
- **End-of-Life Planning**: Cost planning for product disposal and recycling
- **Pricing Strategy**: Economic data for sustainable product pricing
- **Economic Impact Assessment**: Understanding economic implications of environmental choices

## Validation Rules

- **Decimal Patterns**: All monetary values use regex patterns for validation
- **Currency Codes**: Must follow ISO 4217 standard (3-letter codes)
- **Year Format**: Base year must be in YYYY format
- **Incoterms**: Price basis follows standard international trade terms
- **Positive Values**: Most monetary fields accept positive or zero values
- **Non-Zero Requirements**: Some fields (lifespan, capacity) require positive non-zero values

## Best Practices

1. **Currency Consistency**: Use the same currency throughout all monetary fields
2. **Base Year Alignment**: Align base year with reference period of PCF data
3. **Documentation**: Provide clear descriptions for assumptions and methodologies
4. **Precision**: Use appropriate decimal precision for monetary values
5. **Completeness**: Include relevant cost categories for comprehensive analysis

## Integration with PACT

This extension integrates seamlessly with PACT PCF data to provide:
- Economic context for environmental impact decisions
- Cost-benefit analysis of sustainability measures
- Life cycle costing alongside life cycle assessment
- Economic justification for environmental investments

## Example Usage

```json
{
  "extensions": {
    "economic": {
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
}
```

## Related Extensions

- [Uncertainty Assessment](../uncertaintyAssessment/documentation.md) - For economic uncertainty analysis
- [Primary Data Share](../primary-data-share/documentation.md) - For data quality of economic inputs
- [Activity Name](../activityName/documentation.md) - For linking economic data to specific activities

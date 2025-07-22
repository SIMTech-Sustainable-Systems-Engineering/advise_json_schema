---
layout: extension_index
title: Economic Data Extension
extension_name: economic
---
## Overview

The Economic extension provides comprehensive economic data for Product Carbon Footprint calculations, including capital expenditure (CAPEX), operating expenditure (OPEX), end-of-life costs, residual values, and product pricing information. This extension enables detailed economic analysis alongside environmental impact assessment.

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

## Related Extensions

- [Uncertainty Assessment](../../uncertaintyAssessment/index) - For economic uncertainty analysis
- [Activity Name](../../activityName/index) - For linking economic data to specific activities

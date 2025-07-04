# Uncertainty Assessment Extension

## Overview

The Uncertainty Assessment extension provides a way to document uncertainty assessment methodologies and descriptions for Product Carbon Footprint calculations. This extension allows organizations to communicate the level of confidence and variability in their carbon footprint data.

## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `description` | string | Yes | Text description of the uncertainty assessment methodology, confidence levels, or variability analysis |

## Use Cases

- **Methodology Documentation**: Describe the uncertainty assessment approach used
- **Confidence Levels**: Communicate confidence intervals or uncertainty ranges
- **Data Quality Indicators**: Provide information about data quality and reliability
- **Sensitivity Analysis**: Document sensitivity analysis results or approaches

## Validation Rules

- The `description` field is required and must be a non-empty string
- No additional properties are allowed beyond those defined in the schema

## Integration with PACT

This extension integrates with the PACT Data Model Extension framework by providing uncertainty assessment information that can be referenced in the `lcia_description.others.uncertainty_assessment_description` field.

## Best Practices

1. **Be Specific**: Provide clear, specific descriptions of uncertainty assessment methods
2. **Include Quantitative Information**: When possible, include numerical uncertainty ranges or confidence intervals
3. **Reference Standards**: Reference relevant uncertainty assessment standards or methodologies (e.g., ISO 14067, GHG Protocol)
4. **Document Assumptions**: Clearly state any assumptions made in the uncertainty assessment

## Example Usage

```json
{
  "extensions": {
    "uncertaintyAssessment": {
      "description": "Monte Carlo simulation with 10,000 iterations. 95% confidence interval: ±15% of reported value. Primary uncertainty sources: electricity grid mix (±8%), transportation distances (±12%), and process efficiency (±5%)."
    }
  }
}
```

## Related Extensions

- [Emissions GHG Breakdown](../emissionsGHGBreakdown/documentation.md) - For detailed GHG composition
- [Emissions Scope Breakdown](../emissionsScopeBreakdown/documentation.md) - For scope-based emissions analysis
- [Primary Data Share](../primary-data-share/documentation.md) - For data quality assessment

# Impact Methods Extension

## Overview

The Impact Methods extension provides a way to specify the impact assessment methods, methodologies, or frameworks used in the Product Carbon Footprint calculation. This extension allows organizations to document the specific assessment approaches and standards applied in their environmental impact calculations.

## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `impactMethods` | string | No | Text description of the impact assessment methods, methodologies, or frameworks used |

## Use Cases

- **Method Documentation**: Document specific impact assessment methodologies used
- **Standard Compliance**: Reference compliance with assessment standards (e.g., ISO 14040/14044, ILCD)
- **Methodology Transparency**: Provide transparency about calculation approaches
- **Quality Assurance**: Document assessment quality and reliability methods
- **Peer Review**: Support peer review processes by documenting methods

## Validation Rules

- Must be a string value
- No specific format requirements (free text)
- Can include references to standards, methodologies, or frameworks

## Integration with PACT

This extension integrates with the PACT Data Model by providing additional context about the assessment methodology used to calculate the PCF data, complementing the existing `characterizationFactors` and `crossSectoralStandardsUsed` fields.

## Best Practices

1. **Be Specific**: Include specific method names, versions, and standards
2. **Reference Standards**: Cite relevant ISO standards, ILCD Handbook, or other frameworks
3. **Include Version Information**: Specify versions of methods or databases used
4. **Document Deviations**: Note any deviations from standard methodologies
5. **Cite Sources**: Reference scientific papers or guidance documents when applicable

## Example Usage

```json
{
  "extensions": {
    "impactMethods": "Impact assessment following ISO 14040/14044 principles using ReCiPe 2016 v1.1 methodology. Climate change assessment based on IPCC AR6 GWP100 characterization factors. Inventory modeling aligned with ILCD Handbook recommendations."
  }
}
```

## Common Impact Assessment Methods

- **Life Cycle Impact Assessment (LCIA) Methods**: ReCiPe, CML-IA, TRACI, USEtox
- **Characterization Methods**: IPCC AR5/AR6 GWP, Ecological Scarcity, Environmental Footprints
- **Assessment Frameworks**: ISO 14040/14044, ILCD Handbook, GHG Protocol
- **Database Methods**: ecoinvent, GaBi, IDEMAT, SimaPro methods

## Related Extensions

- [Uncertainty Assessment](../uncertaintyAssessment/documentation.md) - For documenting uncertainty in impact methods
- [Activity Name](../activityName/documentation.md) - For linking methods to specific activities
- [Database](../database/documentation.md) - For referencing impact assessment databases used

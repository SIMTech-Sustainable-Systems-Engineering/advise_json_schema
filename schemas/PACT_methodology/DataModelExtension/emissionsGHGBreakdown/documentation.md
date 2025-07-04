# Emissions GHG Breakdown Extension

This extension provides a detailed breakdown of greenhouse gas emissions by specific gas types, enabling granular analysis and reporting of carbon footprint components.

## Purpose

The Emissions GHG Breakdown Extension enables:
- **Detailed gas analysis**: Break down total emissions by individual greenhouse gas types
- **Regulatory compliance**: Support for gas-specific reporting requirements
- **Process optimization**: Identify which gases contribute most to emissions
- **Scientific accuracy**: Provide precise emissions data for each gas type
- **Trend analysis**: Track changes in gas-specific emissions over time

## Use Cases

- **Regulatory reporting**: Meet requirements for gas-specific emission declarations
- **Process improvement**: Identify opportunities to reduce specific gas emissions
- **Carbon accounting**: Detailed accounting for different greenhouse gases
- **Environmental impact assessment**: Analyze the full spectrum of GHG emissions
- **Supply chain transparency**: Provide detailed emission breakdowns to stakeholders

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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsGHGBreakdown/schema.json",
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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsGHGBreakdown/schema.json",
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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsGHGBreakdown/schema.json",
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

## Integration with Core PACT

This extension provides detailed breakdown that should complement the core PACT emission values:
- Total emissions in core PACT should equal or be consistent with the sum of gas-specific values
- Values are typically expressed in CO2 equivalent units
- Consider global warming potentials when aggregating values

## Validation Rules

- All values must match the PositiveOrZeroDecimal pattern: `^[+]?\d+(\\.\\d+)?$`
- Values must be zero or positive
- Decimal places are allowed for precision
- Optional plus sign is permitted
- All properties are optional (can be omitted if not applicable)

## Units and Conversion

- Values should be expressed in a consistent unit (typically kg CO2 equivalent)
- Consider applying appropriate Global Warming Potential (GWP) factors
- Ensure consistency with the core PACT emission values
- Document the time horizon used for GWP calculations (e.g., 100-year GWP)

## Best Practices

- **Complete coverage**: Include all relevant gas types for your process
- **Precision**: Use appropriate decimal precision for each gas type
- **Consistency**: Ensure breakdown sums align with total emissions
- **Documentation**: Document any assumptions or conversion factors used
- **Zero values**: Include zero values for gases that are measured but not present

## Version History

- **v1.0.0**: Initial version with seven major greenhouse gas categories

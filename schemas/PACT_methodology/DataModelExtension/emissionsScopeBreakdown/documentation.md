# Emissions Scope Breakdown Extension

This extension provides a detailed breakdown of greenhouse gas emissions according to the GHG Protocol's three scope categories, enabling comprehensive carbon accounting and reporting.

## Purpose

The Emissions Scope Breakdown Extension enables:
- **GHG Protocol compliance**: Align with international greenhouse gas accounting standards
- **Comprehensive carbon accounting**: Track emissions across all operational boundaries
- **Supply chain transparency**: Distinguish between direct and indirect emissions
- **Strategic planning**: Identify emission reduction opportunities by scope
- **Regulatory reporting**: Meet scope-specific reporting requirements

## Use Cases

- **Carbon footprint reporting**: Provide detailed scope-based emission breakdowns
- **Supply chain management**: Analyze upstream and downstream emission impacts
- **Energy strategy**: Identify opportunities for renewable energy procurement (Scope 2)
- **Vendor assessment**: Evaluate supplier emissions (Scope 3)
- **Carbon reduction planning**: Prioritize reduction efforts by scope and impact

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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsScopeBreakdown/schema.json",
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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsScopeBreakdown/schema.json",
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
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/emissionsScopeBreakdown/schema.json",
  "data": {
    "description": "Product-level scope allocation based on activity-based costing methodology",
    "Scope1": "5.8",
    "Scope2": "12.4",
    "Scope3": "35.6"
  }
}
```

## Integration with Core PACT

This extension should complement the core PACT emission values:
- The sum of Scope 1, 2, and 3 should align with total PCF values
- Particularly relevant for `fossilGhgEmissions` breakdown
- Supports transparency in emission boundary definitions
- Enhances understanding of emission sources and hotspots

## Scope Definitions (GHG Protocol)

### Scope 1: Direct Emissions
- **Stationary combustion**: Fuel burned in boilers, furnaces, turbines
- **Mobile combustion**: Fuel burned in company vehicles, ships, aircraft
- **Process emissions**: Chemical reactions, fugitive emissions
- **Fugitive emissions**: Refrigerants, natural gas leaks

### Scope 2: Indirect Energy Emissions
- **Purchased electricity**: Grid electricity consumption
- **Purchased steam**: Steam purchased from external sources
- **Purchased heating/cooling**: District heating and cooling systems

### Scope 3: Other Indirect Emissions
- **Category 1**: Purchased goods and services
- **Category 2**: Capital goods
- **Category 3**: Fuel and energy-related activities
- **Category 4**: Upstream transportation and distribution
- **Category 5**: Waste generated in operations
- **Category 6**: Business travel
- **Category 7**: Employee commuting
- **Category 8**: Upstream leased assets
- **Category 9**: Downstream transportation and distribution
- **Category 10**: Processing of sold products
- **Category 11**: Use of sold products
- **Category 12**: End-of-life treatment of sold products
- **Category 13**: Downstream leased assets
- **Category 14**: Franchises
- **Category 15**: Investments

## Validation Rules

- All numeric values must match the PositiveOrZeroDecimal pattern: `^[+]?\\d+(\\.\\d+)?$`
- Values must be zero or positive
- All properties are optional
- Description should provide clear methodology context

## Best Practices

- **Methodology transparency**: Use the description field to explain calculation methods
- **Boundary consistency**: Ensure scope boundaries align with organizational boundaries
- **Data quality**: Document any estimates or assumptions used
- **Completeness**: Strive for comprehensive Scope 3 category coverage
- **Double counting**: Avoid double counting between scopes

## Version History

- **v1.0.0**: Initial version with three GHG Protocol scopes and methodology description

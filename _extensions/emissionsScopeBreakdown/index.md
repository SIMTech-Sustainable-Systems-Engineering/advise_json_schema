---
layout: extension_index
title: GHG Emission Scope Breakdown Extension
extension_name: emissionsScopeBreakdown
---
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
- **Unit consistency** Values should be expressed in a unit consistent with the base PCF unit (typically kg CO2 equivalent)
- **Data quality**: Document any estimates or assumptions used
- **Completeness**: Strive for comprehensive Scope 3 category coverage
- **Double counting**: Avoid double counting between scopes

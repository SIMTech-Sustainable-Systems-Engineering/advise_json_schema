---
layout: extension_index
title: GHG Emissions Breakdown Extension
extension_name: emissionsGHGBreakdown
---

## Overview
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

- Values should be expressed in a unit consistent with the base PCF unit (typically kg CO2 equivalent)
- Consider applying appropriate Global Warming Potential (GWP) factors
- Ensure consistency with the core PACT emission values
- Document the time horizon used for GWP calculations (e.g., 100-year GWP)

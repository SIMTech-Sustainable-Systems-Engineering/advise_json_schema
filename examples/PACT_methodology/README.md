# PACT Methodology Examples

This directory contains example JSON files demonstrating the usage of PACT (Partnership for Carbon Transparency) schemas.

## Available Examples

### DataModelExtension Examples
Examples showing how to use PACT Data Model Extensions for custom properties and industry-specific requirements.

## Example Categories

- **Basic Examples**: Simple, minimal examples showing core concepts
- **Industry Examples**: Real-world scenarios from different industries
- **Complex Examples**: Advanced usage with multiple extensions and edge cases

## File Organization

```
PACT_methodology/
├── DataModelExtension/         # Extension usage examples
│   ├── basic-extension.json    # Simple extension example
│   ├── industry-automotive.json # Automotive industry example
│   └── complex-multi-extension.json # Multiple extensions
├── basic-pcf.json             # Basic Product Carbon Footprint
├── company-footprint.json     # Company-level footprint
└── supply-chain-example.json  # Multi-tier supply chain
```

## Using Examples

These examples can be used to:
1. Understand schema structure and requirements
2. Test API implementations
3. Validate schema changes
4. Train development teams

## Data Notes

- All examples use fictional data
- Numerical values are for demonstration only
- Real implementations should use actual measured data
- Examples may be simplified for clarity

## Validation

All examples in this directory should validate against their corresponding schemas. Run validation tests before committing changes:

```bash
# Validate all PACT examples
npm run test:examples PACT_methodology
```

## Contributing

When adding examples:
- Use realistic but fictional data
- Cover common use cases in your industry
- Include edge cases and error scenarios
- Document any special requirements or assumptions

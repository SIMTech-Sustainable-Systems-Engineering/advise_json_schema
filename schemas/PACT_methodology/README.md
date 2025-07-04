# PACT Methodology Schemas

This directory contains JSON schemas for the PACT (Partnership for Carbon Transparency) methodology, which enables the exchange of carbon footprint data along value chains.

## About PACT

The Partnership for Carbon Transparency (PACT) is an initiative focused on creating standards for carbon footprint data exchange. These schemas support the interoperability requirements defined in the PACT technical specifications.

## Directory Structure

```
PACT_methodology/
├── README.md                    # This file
├── DataModelExtension/          # Extended data model schemas
│   ├── README.md               # Extension-specific documentation
│   └── *.json                  # Extension schema files
├── core/                       # Core PACT schemas (if needed)
└── examples/                   # Usage examples (optional, main examples in /examples)
```

## Schema Categories

### DataModelExtension
Contains schemas for extending the core PACT data model with additional properties and structures as defined in the PACT Data Model Extension specifications.

## Version Management

- Schema files should include version information in their `$id` and filename when multiple versions exist
- Follow semantic versioning principles (v1.0.0, v1.1.0, etc.)
- Maintain backward compatibility when possible

## Related Documentation

- [PACT Official Documentation](https://www.carbon-transparency.com/)
- [PACT Technical Specifications](https://www.carbon-transparency.com/technical-specifications)
- [Examples Directory](../../examples/PACT_methodology/)

## Schema URLs

When deployed, schemas will be accessible at:
```
https://your-domain.com/schemas/PACT_methodology/{category}/{schema-name}.json
```

## Contributing

When adding or updating PACT schemas:
1. Ensure compliance with PACT specifications
2. Validate against official PACT test cases
3. Update examples in the `/examples/PACT_methodology/` directory
4. Document any extensions or customizations clearly

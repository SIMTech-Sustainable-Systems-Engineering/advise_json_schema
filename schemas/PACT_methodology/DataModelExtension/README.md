# PACT Data Model Extension Schemas

This directory contains JSON schemas for the PACT Data Model Extensions, which allow for extending the core PACT data model with additional properties and structures.

## Purpose

The Data Model Extension schemas enable:
- Custom property definitions beyond the core PACT specification
- Industry-specific data requirements
- Organization-specific data fields
- Extended carbon footprint calculations and methodologies

## Schema Files

Place your JSON schema files in this directory following these conventions:

### Naming Convention
- Use descriptive, kebab-case names: `product-carbon-footprint-extension.json`
- Include version in filename if multiple versions exist: `pcf-extension-v1.0.json`
- Use `.json` extension for schema files

### Schema Structure
Each schema should include:
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/your-schema.json",
  "title": "Descriptive Title",
  "description": "Comprehensive description of the schema purpose",
  "type": "object",
  "properties": {
    // Your schema properties here
  },
  "required": [],
  "examples": [
    // Include examples when possible
  ]
}
```

## Usage Examples

For usage examples of these schemas, see the corresponding directory:
`/examples/PACT_methodology/DataModelExtension/`

## Validation

Before committing schemas to this directory:
1. Validate JSON syntax
2. Ensure schema follows JSON Schema specifications
3. Test against example data
4. Verify compliance with PACT extension guidelines

## Integration

These schemas are designed to be referenced in API responses:
```json
{
  "productFootprint": {
    // Core PACT data
  },
  "extensions": {
    "$schema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/your-extension.json",
    // Extended data following your schema
  }
}
```

## Documentation

Document each schema with:
- Clear purpose and use cases
- Property definitions and constraints
- Integration examples
- Version history and changes

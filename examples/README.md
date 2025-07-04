# Examples Directory

This directory contains example JSON files that demonstrate the usage of schemas defined in the `/schemas` directory.

## Organization

Examples are organized by protocol and mirror the schema directory structure:

```
examples/
├── PACT_methodology/           # PACT protocol examples
│   ├── DataModelExtension/     # Extension examples
│   └── core/                   # Core schema examples
└── {other_protocols}/          # Additional protocol examples
```

## Purpose

Examples serve multiple purposes:
- **Documentation**: Show real-world usage of schemas
- **Testing**: Validate that schemas work with actual data
- **Development**: Provide starting points for developers
- **Validation**: Test schema changes against known good data

## File Naming

- Use descriptive names: `product-carbon-footprint-basic.json`
- Include complexity level: `simple-example.json`, `complex-example.json`
- Group related examples: `automotive-pcf-example.json`, `textile-pcf-example.json`

## Example Structure

Each example should:
1. Be valid JSON
2. Validate against its corresponding schema
3. Include comments (when the schema allows) explaining key fields
4. Represent realistic data scenarios

## Testing Examples

Use the validation tools to ensure examples remain valid:
```bash
# Validate all examples for a protocol
npm run test:examples PACT_methodology

# Validate specific example
npm run validate examples/PACT_methodology/simple-pcf.json
```

## Contributing Examples

When adding examples:
1. Ensure they validate against the corresponding schema
2. Remove any sensitive or proprietary data
3. Include a variety of scenarios (simple, complex, edge cases)
4. Document any special considerations in the example comments

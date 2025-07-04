# JSON Schema Repository

This repository serves as a centralized location for hosting JSON schemas used across multiple data exchange protocols. The schemas are organized by protocol and can be served via GitHub Pages or AWS hosting.

## Repository Structure

```
├── docs/                   # Documentation and GitHub Pages content
├── schemas/               # JSON schema files organized by protocol
│   └── PACT_methodology/  # PACT (Partnership for Carbon Transparency) schemas
│       └── DataModelExtension/
├── examples/              # Example JSON files demonstrating schema usage
│   └── PACT_methodology/
├── tools/                 # Validation scripts and utilities
├── tests/                 # Schema validation tests
└── README.md             # This file
```

## Supported Protocols

- **PACT (Partnership for Carbon Transparency)**: Carbon footprint data exchange schemas
- _Additional protocols will be added as needed_

## Usage

### Direct Schema Access

Schemas can be accessed directly via their URL path:
```
https://your-domain.com/schemas/{protocol}/{schema-file}.json
```

### API Integration

Include schema URLs in your API responses to enable validation:
```json
{
  "data": { ... },
  "$schema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/schema.json"
}
```

## Contributing

1. Follow the folder structure convention: `schemas/{protocol}/{subcategory}/`
2. Include comprehensive documentation in each protocol folder
3. Provide example files in the `examples/` directory
4. Ensure all schemas are valid JSON Schema Draft 7 or later
5. Update relevant README files when adding new schemas

## Validation

Use the tools in the `tools/` directory to validate schemas before committing:
```bash
# Validate schema syntax
node tools/validate-schema.js schemas/PACT_methodology/schema.json

# Test against examples
node tools/test-examples.js PACT_methodology
```

## Hosting

This repository is designed to work with:
- **GitHub Pages**: Automatic deployment from main branch
- **AWS S3 + CloudFront**: For enterprise hosting requirements
- **Custom hosting**: Standard web server with CORS headers

## License

[Specify your license here]

## Contact

For questions or contributions, please [create an issue](../../issues) or contact the development team.

# Contributing to JSON Schema Repository

Thank you for contributing to our JSON Schema repository! This guide will help you understand our practices and standards.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Repository Structure

```
├── docs/                   # Documentation
├── schemas/               # JSON schema files by protocol
│   └── {protocol}/        # Protocol-specific schemas
├── examples/              # Example JSON files
├── tools/                 # Validation and utility scripts
└── tests/                 # Automated tests
```

## Adding a New Protocol

1. Create protocol directory: `schemas/{protocol_name}/`
2. Add protocol README with documentation
3. Create schema files following naming conventions
4. Add examples in `examples/{protocol_name}/`
5. Update main README.md with protocol information

## Schema Guidelines

### File Naming
- Use kebab-case: `product-carbon-footprint.json`
- Be descriptive and specific
- Include version for multiple versions: `schema-v1.0.json`

### Schema Structure
```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "$id": "https://your-domain.com/schemas/{protocol}/{schema-name}.json",
  "title": "Clear, descriptive title",
  "description": "Comprehensive description of purpose and usage",
  "type": "object",
  "properties": {
    // Define your properties here
  },
  "required": ["list", "of", "required", "fields"],
  "examples": [
    // Include realistic examples
  ]
}
```

### Required Fields
- `$schema`: Use JSON Schema Draft 7 or later
- `$id`: Full URL where schema will be hosted
- `title`: Human-readable title
- `description`: Detailed purpose and usage description
- `type`: Schema type (usually "object")

### Best Practices
- Use clear, descriptive property names
- Include comprehensive descriptions for all properties
- Set appropriate constraints (min/max, patterns, enums)
- Provide realistic examples
- Follow the target protocol's official specifications
- Use consistent formatting and indentation

## Examples

### Adding Examples
1. Create example files in `examples/{protocol}/`
2. Ensure examples validate against schemas
3. Use realistic but fictional data
4. Remove sensitive information
5. Include variety: simple, complex, edge cases

### Example Structure
```json
{
  "$schema": "https://your-domain.com/schemas/{protocol}/{schema}.json",
  // Your example data here
}
```

## Validation

### Before Committing
Run validation checks:
```bash
# Validate all schemas
npm run validate

# Test examples against schemas
npm run validate:examples

# Run all tests
npm test
```

### Required Validations
- JSON syntax must be valid
- Schema must compile without errors
- Examples must validate against their schemas
- Follow protocol specifications exactly

## Documentation

### Schema Documentation
Each schema should include:
- Clear purpose statement
- Property definitions and constraints
- Usage examples
- Integration guidelines
- Version history (if applicable)

### Protocol Documentation
Each protocol directory needs:
- `README.md` with protocol overview
- Links to official specifications
- Schema organization explanation
- Usage guidelines

## Pull Request Process

1. **Validation**: Ensure all tests pass locally
2. **Documentation**: Update relevant README files
3. **Examples**: Include comprehensive examples
4. **Description**: Write clear PR description explaining changes
5. **Review**: Address feedback from maintainers

### PR Checklist
- [ ] All schemas validate successfully
- [ ] Examples are included and validate
- [ ] Documentation is updated
- [ ] Tests pass locally
- [ ] No sensitive data in examples
- [ ] Follows naming conventions
- [ ] Complies with protocol specifications

## Code Style

### JSON Formatting
- Use 2-space indentation
- No trailing commas
- Use double quotes for strings
- Consistent property ordering

### File Organization
- Keep related schemas together
- Use subdirectories for complex protocols
- Maintain parallel structure between schemas and examples

## Testing

### Automated Tests
We run automated validation on:
- Schema syntax and structure
- Example validation against schemas
- Link validation in documentation
- File naming conventions

### Manual Testing
Before submitting:
- Test schemas with real API data
- Verify examples work in target systems
- Check documentation renders correctly
- Validate against protocol test suites

## Release Process

1. Version updates in package.json
2. Update CHANGELOG.md
3. Tag releases in git
4. Deploy to hosting platform
5. Update documentation links

## Getting Help

- Create an issue for questions
- Join our discussion forum
- Check existing documentation
- Review similar protocol implementations

## Standards Compliance

- Follow JSON Schema specifications
- Adhere to protocol requirements
- Maintain backward compatibility when possible
- Use semantic versioning for schema versions

Thank you for helping maintain high-quality schemas for the community!

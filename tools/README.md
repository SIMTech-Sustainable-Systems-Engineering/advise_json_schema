# Tools Directory

This directory contains utilities and scripts for working with JSON schemas in this repository.

## Available Tools

### Validation Scripts
- `validate-schema.js` - Validate JSON schema syntax and structure
- `validate-examples.js` - Test examples against their schemas
- `test-all.js` - Run comprehensive validation on all schemas and examples

### Development Utilities
- `generate-docs.js` - Generate documentation from schema files
- `convert-schemas.js` - Convert between schema versions
- `lint-schemas.js` - Code style and best practice checks

### CI/CD Scripts
- `pre-commit-hook.js` - Git pre-commit validation
- `deploy-check.js` - Pre-deployment validation
- `generate-index.js` - Create schema index/catalog

## Usage

### Schema Validation
```bash
# Validate a single schema
node tools/validate-schema.js schemas/PACT_methodology/DataModelExtension/my-schema.json

# Validate all schemas in a protocol
node tools/validate-schema.js schemas/PACT_methodology/

# Validate entire repository
node tools/test-all.js
```

### Example Testing
```bash
# Test examples against schemas
node tools/validate-examples.js PACT_methodology

# Test specific example
node tools/validate-examples.js examples/PACT_methodology/basic-pcf.json
```

## Setup

Install required dependencies:
```bash
npm install
```

Required packages:
- `ajv` - JSON Schema validator
- `ajv-formats` - Additional validation formats
- `glob` - File pattern matching
- `fs-extra` - Enhanced file system operations

## Configuration

Tool configurations are stored in:
- `package.json` - npm scripts and dependencies
- `.eslintrc.json` - Code linting rules
- `jest.config.js` - Test configuration

## Integration

### Git Hooks
Set up pre-commit validation:
```bash
# Install git hook
cp tools/pre-commit-hook.js .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### CI/CD Pipeline
Include validation in your pipeline:
```yaml
# GitHub Actions example
- name: Validate Schemas
  run: node tools/test-all.js
```

## Development

When adding new tools:
1. Follow the existing code style
2. Include comprehensive error handling
3. Add help/usage documentation
4. Test with various input scenarios
5. Update this README with usage instructions

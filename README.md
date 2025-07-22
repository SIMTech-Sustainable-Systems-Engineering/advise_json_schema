# AdViSE JSON Schema

This repository serves as a centralized location for hosting JSON schemas used for PACT Data Model Extensions.

## Repository Structure

```
├── _extensions/           # Extension schema files and documentation
├── _versions/             # Version documentation
├── _layouts/              # Jekyll layout templates
├── schemas/               # Generated schema files (Jekyll output)
├── tools/                 # Validation scripts and utilities
├── _config.yml           # Jekyll configuration
└── README.md             # This file
```

## Supported Extensions

- **Activity Name**: Standardized activity naming for LCA processes
- **Database**: Database source and version information
- **Data Responsibility**: Data generator, entry, and reviewer information
- **Economic**: Economic data including CAPEX, OPEX, and product pricing
- **Emissions GHG Breakdown**: Detailed greenhouse gas composition
- **Emissions Scope Breakdown**: Scope 1, 2, and 3 emissions breakdown
- **Impact Methods**: Life cycle impact assessment methodology documentation
- **Uncertainty Assessment**: Uncertainty analysis and confidence intervals

## Usage

### Direct Schema Access

Schemas can be accessed directly via their URL path:
```
https://simtech-sustainable-systems-engineering.github.io/advise_json_schema/extensions/{extension}/{version}/schema.json
```


## Contributing

1. Follow the folder structure convention: `_extensions/{version}/{extension-name}/`
2. Include comprehensive documentation in each extension's `documentation.md` file
3. Provide example files in the extension's `examples/` directory when applicable
4. Ensure all schemas are valid JSON Schema Draft 7 or later
5. Update relevant documentation when adding new extensions
6. Follow the Jekyll site structure for proper deployment

## Validation

Use the tools in the `tools/` directory to validate schemas before committing:
```bash
# Validate schema syntax
node tools/validate-schema.js _extensions/0.1.0/economic/schema.json
```

## Contact

For questions or contributions, please [create an issue](../../issues) or contact the development team.

# Schemas Directory

This directory contains all JSON schema files organized by data exchange protocol.

## Organization Structure

```
schemas/
├── {protocol_name}/           # Root folder for each protocol
│   ├── README.md             # Protocol-specific documentation
│   ├── {subcategory}/        # Optional subcategories
│   │   ├── README.md         # Subcategory documentation
│   │   └── *.json           # Schema files
│   └── *.json               # Root-level schema files
```

## Naming Conventions

- **Protocol folders**: Use official protocol names (e.g., `PACT_methodology`, `GS1_EPCIS`)
- **Schema files**: Use descriptive, kebab-case names (e.g., `carbon-footprint.json`, `product-declaration.json`)
- **Subcategories**: Group related schemas logically (e.g., `DataModelExtension`, `core`, `extensions`)

## Schema Requirements

All schemas must:
1. Be valid JSON Schema (Draft 7 or later recommended)
2. Include proper `$id` fields with full URLs
3. Have comprehensive `title` and `description` fields
4. Include examples where applicable
5. Follow the protocol's official specifications

## URL Structure

Schemas will be accessible via:
```
https://your-domain.com/schemas/{protocol}/{subcategory}/{schema-name}.json
```

## Current Protocols

- **PACT_methodology**: Partnership for Carbon Transparency schemas for carbon footprint data exchange

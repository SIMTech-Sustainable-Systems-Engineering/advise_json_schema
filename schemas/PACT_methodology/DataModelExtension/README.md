# PACT Data Model Extensions

This directory contains custom JSON schemas that extend the PACT data model using the official PACT Data Model Extension framework (PACT spec 3.0.0).

## PACT Data Model Extension Framework

The PACT Data Model Extension is an official framework that allows extending the core PACT specification with additional data. Each extension follows this structure:

```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/{extension-name}/schema.json",
  "documentation": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/{extension-name}/documentation/",
  "data": { /* extension-specific data */ }
}
```

## Purpose

Our custom Data Model Extensions enable:
- Industry-specific data requirements beyond core PACT
- Organization-specific data fields
- Extended carbon footprint calculations and methodologies
- Standardized data sharing across supply chains

## Directory Structure

```
DataModelExtension/
├── README.md                           # This file
├── data-model-extension.json           # Base PACT Data Model Extension schema
├── examples/                           # Data Model Extension wrapper examples
│   ├── README.md                       # Examples documentation
│   ├── basic-data-model-extension.json # Basic extension example
│   ├── external-extension.json         # External extension example
│   └── multiple-extensions.json        # Multiple extensions example
├── primary-data-share/                 # Example custom extension
│   ├── schema.json                     # Extension-specific schema
│   ├── documentation.md                # Extension documentation
│   └── examples/                       # Extension data examples
├── shipment-data/                      # Another extension (example)
│   ├── schema.json
│   ├── documentation.md
│   └── examples/
└── {your-extension}/                   # Your custom extensions
    ├── schema.json
    ├── documentation.md
    └── examples/
```

## Base Data Model Extension Schema

The `data-model-extension.json` file defines the schema for the PACT Data Model Extension wrapper itself, which includes:

- **specVersion**: PACT specification version (e.g., "3.0.0")
- **dataSchema**: URL to the extension's schema file  
- **documentation**: URL to the extension's documentation (optional)
- **data**: The actual extension data conforming to the referenced schema

## Creating Custom Extensions

### 1. Create Extension Directory
```bash
mkdir schemas/PACT_methodology/DataModelExtension/your-extension-name
```

### 2. Extension Schema Template
Each custom extension schema should follow this template:

```json
{
  "$id": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/{extension-name}/schema.json",
  "$schema": "https://json-schema.org/draft-07/schema#",
  "title": "Your Extension Title",
  "description": "Description of what this extension provides",
  "type": "object",
  "required": ["field1", "field2"],
  "properties": {
    "field1": {
      "type": "number",
      "description": "Description of field1"
    },
    "field2": {
      "type": "string",
      "description": "Description of field2"
    }
  },
  "additionalProperties": false
}
```

### 3. Usage in PACT Extensions Array
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/your-extension/schema.json",
  "documentation": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/your-extension/documentation.md",
  "data": {
    "field1": 42,
    "field2": "example value"
  }
}
```

## Usage in PACT Data

Extensions are used within PACT ProductFootprint data as follows:

```json
{
  "data": {
    "id": "91715e5e-fd0b-4d1c-8fab-76290c46e6ed",
    "specVersion": "3.0.0",
    "created": "2024-03-01T09:32:20Z",
    "status": "Active",
    "validityPeriodStart": "2024-03-01T09:32:20Z",
    "validityPeriodEnd": "2025-12-31T00:00:00Z",
    "companyName": "My Corp",
    "companyIds": [
      "urn:uuid:69585GB6-56T9-6958-E526-6FDGZJHU1326"
    ],
    "productDescription": "Example Product",
    "productIds": ["urn:gtin:5695872369587"],
    "productClassifications": ["urn:pact:productclassification:un-cpc:1234"],
    "productNameCompany": "Example Product Name",
    "comment": "",
    "pcf": {
      "declaredUnitOfMeasurement": "kilogram",
      "declaredUnitAmount": "1",
      "productMassPerDeclaredUnit": "1.0",
      "pcfExcludingBiogenicUptake": "2.5",
      "pcfIncludingBiogenicUptake": "2.3",
      "fossilGhgEmissions": "2.0",
      "fossilCarbonContent": "0.1",
      "biogenicCarbonContent": "0.05",
      "landManagementBiogenicCO2Emissions": "0.3",
      "landManagementBiogenicCO2Removals": "-0.1",
      "biogenicCO2Withdrawal": "-0.2",
      "aircraftGhgEmissions": "0.01",
      "ipccCharacterizationFactors": ["AR6"],
      "crossSectoralStandards": ["GHGP-Product", "ISO14067"],
      "productOrSectorSpecificRules": [
        {
          "operator": "Other",
          "ruleNames": ["Example Rule"],
          "otherOperatorName": "Example Operator"
        }
      ],
      "biogenicAccountingMethodology": "GHPG",
      "boundaryProcessesDescription": "Cradle-to-gate boundary including material acquisition and production",
      "referencePeriodStart": "2024-01-01T00:00:00Z",
      "referencePeriodEnd": "2024-12-31T23:59:59Z",
      "geographyRegionOrSubregion": "Western Europe",
      "secondaryEmissionFactorSources": [
        {
          "name": "Ecoinvent",
          "version": "3.9"
        }
      ],
      "exemptedEmissionsPercent": "0",
      "exemptedEmissionsDescription": "",
      "allocationRulesDescription": "Mass allocation applied",
      "primaryDataShare": "85.5",
      "dqi": {
        "technologicalDQR": "1.5",
        "temporalDQR": "2.0",
        "geographicalDQR": "1.8"
      },
      "verification": {
        "providerName": "Example Verifier"
      }
    },
    "extensions": [
      {
        "specVersion": "3.0.0",
        "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/primary-data-share/schema.json",
        "data": {
          "primaryDataShareScope2": 67.2,
          "primaryDataShareScope3": 12.3
        }
      }
    ]
  }
}
```

## Documentation

Document each schema with:
- Clear purpose and use cases
- Property definitions and constraints
- Integration examples
- Version history and changes

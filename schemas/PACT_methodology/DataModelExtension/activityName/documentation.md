# Activity Name Extension

This extension provides the specific name of the datapoint or process used to generate the product, enabling clear identification of the activity associated with the carbon footprint data.

## Purpose

The Activity Name Extension enables:
- **Process identification**: Clear naming of the specific process or activity
- **Data traceability**: Link carbon footprint data to specific named processes
- **Process mapping**: Support for detailed process flow documentation
- **Data organization**: Categorize and organize data points by activity names
- **Reporting clarity**: Provide human-readable process names for reports

## Use Cases

- **Process documentation**: Document specific manufacturing processes or activities
- **Supply chain mapping**: Identify individual processes within complex supply chains
- **Data analysis**: Group and analyze carbon footprints by activity type
- **Audit trails**: Provide clear process names for verification and auditing
- **Reporting**: Generate detailed reports with specific process names

## Schema Properties

### Required Properties

#### activityName
- **Type**: String (minimum length: 1)
- **Description**: The name of the datapoint or process used to generate the product
- **Examples**: 
  - `"Steel Production - Electric Arc Furnace"`
  - `"Transportation - Road Freight"`
  - `"Electricity Generation - Solar PV"`
  - `"Aluminum Smelting - Primary"`
  - `"Packaging - Cardboard Box Manufacturing"`

## Example Usage

### Manufacturing Process
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/activityName/schema.json",
  "data": {
    "activityName": "Steel Production - Electric Arc Furnace"
  }
}
```

### Transportation Process
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/activityName/schema.json",
  "data": {
    "activityName": "Transportation - Road Freight, 40t truck, Euro 6"
  }
}
```

### Energy Generation
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/activityName/schema.json",
  "data": {
    "activityName": "Electricity Generation - Natural Gas Combined Cycle"
  }
}
```

## Integration with Core PACT

This extension complements the core PACT data by providing specific process names that can be used for:
- Enhanced reporting and documentation
- Process-level analysis and optimization
- Supply chain transparency
- Detailed carbon accounting

## Validation Rules

- `activityName` must be a non-empty string
- Consider using standardized naming conventions for consistency
- Include sufficient detail to uniquely identify the process

## Best Practices

- **Consistent naming**: Use standardized naming conventions across your organization
- **Descriptive names**: Include key process parameters or specifications
- **Hierarchical structure**: Consider using structured naming (e.g., "Category - Subcategory - Specific Process")
- **Technology specificity**: Include relevant technology details when applicable

## Version History

- **v1.0.0**: Initial version with basic activity name field

# Database Extension

This extension provides information about the database version and instance where the carbon footprint datapoint is stored, enabling traceability and version control for data management.

## Purpose

The Database Extension enables:
- **Database identification**: Unique identification of the database instance storing the data
- **Version tracking**: Track which database version contains specific datapoints
- **Data governance**: Maintain audit trails and data lineage
- **Multi-database environments**: Support for organizations using multiple database instances
- **Temporal tracking**: Track validity periods for database instances

## Use Cases

- **Data auditing**: Trace back to the specific database instance where data was stored
- **Version control**: Manage data across different database versions or environments
- **Compliance reporting**: Provide database provenance for regulatory requirements
- **Data migration**: Track data movement between database instances
- **Quality assurance**: Identify trusted vs. experimental database instances

## Schema Properties

### Required Properties

#### id
- **Type**: String (UUID format)
- **Description**: Unique identifier for the database instance
- **Example**: `"550e8400-e29b-41d4-a716-446655440000"`

#### name
- **Type**: String (minimum length: 1)
- **Description**: Human-readable name of the database
- **Example**: `"LCA Database v2.1 Production"`

#### active
- **Type**: Boolean
- **Description**: Indicates if the database is currently active and accepting new data
- **Example**: `true`

### Optional Properties

#### description
- **Type**: String
- **Description**: Detailed description of the database purpose and contents
- **Example**: `"Primary production database containing verified LCA data for 2024"`

#### start_date
- **Type**: String (ISO 8601 date-time format)
- **Description**: Start date when this database version became valid
- **Example**: `"2024-01-01T00:00:00Z"`

#### end_date
- **Type**: String (ISO 8601 date-time format)
- **Description**: End date when this database version is no longer valid
- **Example**: `"2024-12-31T23:59:59Z"`

#### type
- **Type**: String
- **Description**: Type or category of the database
- **Example**: `"production"`, `"staging"`, `"archive"`

#### access
- **Type**: String
- **Description**: Access level or permissions for the database
- **Example**: `"public"`, `"restricted"`, `"internal"`

#### trust
- **Type**: String
- **Description**: Trust level or reliability indicator of the database
- **Example**: `"verified"`, `"preliminary"`, `"experimental"`

#### usageComment
- **Type**: String
- **Description**: Additional comments about database usage, limitations, or context
- **Example**: `"Contains preliminary data pending verification"`

## Example Usage

### Basic Example
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/database/schema.json",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "LCA Database v2.1",
    "active": true
  }
}
```

### Complete Example
```json
{
  "specVersion": "3.0.0",
  "dataSchema": "https://your-domain.com/schemas/PACT_methodology/DataModelExtension/database/schema.json",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "LCA Database v2.1 Production",
    "active": true,
    "description": "Primary production database containing verified LCA data for 2024",
    "start_date": "2024-01-01T00:00:00Z",
    "end_date": "2024-12-31T23:59:59Z",
    "type": "production",
    "access": "internal",
    "trust": "verified",
    "usageComment": "All data verified by third-party auditors"
  }
}
```

## Integration with Core PACT

This extension should be used to provide database provenance for carbon footprint data, helping organizations maintain data governance and traceability.

## Validation Rules

- `id` must be a valid UUID format
- `name` must not be empty
- `start_date` and `end_date` must be valid ISO 8601 date-time strings if provided
- `end_date` should be after `start_date` if both are provided

## Version History

- **v1.0.0**: Initial version with basic database identification and metadata

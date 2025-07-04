# Data Responsibility Extension

## Overview

The Data Responsibility extension provides a way to track the people responsible for different aspects of Product Carbon Footprint data lifecycle, including data generation, entry, and review. This extension supports accountability, traceability, and quality assurance in PCF data management.

## Schema Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `dataGeneratorName` | string | No | Name of the person responsible for generating the PCF data |
| `dataGeneratorEmail` | string | No | Email address of the person responsible for generating the PCF data |
| `dataEntryName` | string | No | Name of the person responsible for entering the PCF data into the system |
| `dataEntryEmail` | string | No | Email address of the person responsible for entering the PCF data into the system |
| `dataReviewerName` | string | No | Name of the person responsible for reviewing the PCF data |
| `dataReviewerEmail` | string | No | Email address of the person responsible for reviewing the PCF data |

## Use Cases

- **Data Accountability**: Track who is responsible for each stage of data lifecycle
- **Quality Assurance**: Identify reviewers for quality control processes
- **Audit Trails**: Maintain records of data responsibility for compliance
- **Contact Management**: Provide contact information for data-related inquiries
- **Workflow Management**: Support data approval and review workflows
- **Compliance Documentation**: Meet regulatory requirements for data responsibility

## Data Roles

### Data Generator
- **Responsibility**: Creating, calculating, or collecting the original PCF data
- **Activities**: LCA calculations, data modeling, measurement, analysis
- **Skills**: Technical expertise in LCA methodology and calculation

### Data Entry
- **Responsibility**: Inputting data into systems, databases, or platforms
- **Activities**: Data entry, format conversion, system upload, validation
- **Skills**: System knowledge, data management, attention to detail

### Data Reviewer
- **Responsibility**: Reviewing, validating, and approving PCF data quality
- **Activities**: Quality checks, methodology review, approval processes
- **Skills**: LCA expertise, quality assurance, regulatory knowledge

## Validation Rules

- All fields are optional strings with no specific format requirements
- Email fields should contain valid email addresses (not enforced by schema)
- Names should be human-readable text

## Integration with PACT

This extension integrates with PACT PCF data to provide:
- Clear accountability for data quality and accuracy
- Traceability of data sources and processing
- Support for data governance and compliance requirements
- Contact information for data verification and follow-up

## Best Practices

1. **Complete Information**: Provide both name and email for each role when possible
2. **Role Separation**: Ensure different people handle generation and review for quality assurance
3. **Current Contacts**: Keep contact information up-to-date for ongoing data management
4. **Clear Responsibilities**: Define clear boundaries between data roles
5. **Privacy Compliance**: Ensure compliance with data protection regulations when sharing personal information

## Example Usage

```json
{
  "extensions": {
    "dataResponsibility": {
      "dataGeneratorName": "Dr. Sarah Johnson",
      "dataGeneratorEmail": "s.johnson@sustainablecorp.com",
      "dataEntryName": "Michael Chen",
      "dataEntryEmail": "m.chen@sustainablecorp.com",
      "dataReviewerName": "Prof. Elena Rodriguez",
      "dataReviewerEmail": "e.rodriguez@university.edu"
    }
  }
}
```

## Data Governance Considerations

- **Confidentiality**: Consider whether personal information should be included in shared PCF data
- **GDPR Compliance**: Ensure compliance with data protection regulations
- **Access Control**: Limit access to personal information based on need-to-know
- **Retention Policies**: Define how long personal information is retained
- **Consent**: Obtain appropriate consent for including personal data in PCF records

## Related Extensions

- [Database](../database/documentation.md) - For tracking database responsibility and ownership
- [Uncertainty Assessment](../uncertaintyAssessment/documentation.md) - For documenting who conducted uncertainty analysis
- [Primary Data Share](../primary-data-share/documentation.md) - For data quality and source responsibility

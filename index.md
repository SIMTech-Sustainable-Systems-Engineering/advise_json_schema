---
layout: default
title: AdViSE JSON Schema Repository
description: Centralized schemas for AdViSE APIs
---


<div class="header">
    <h1>AdViSE JSON Schema Repository</h1>
    <p>Centralized <a href="https://wbcsd.github.io/tr/data-model-extensions-guidance/">Data model extension</a> schemas for <a href="https://www.carbon-transparency.org/pact-methodology">PACT</a></p>
</div>

## [Click Here for latest schema](/schemas/latest)
## Quick Start

### Using Schemas in APIs

```json
{
  "data": { /* your PCF data */ },
  "$schema": "https://your-domain.com/schemas/{version}/{extension}/schema.json"
}
```

### Validation Example

```javascript
const Ajv = require('ajv');
const version = '0.1.0'
const schemaUrl = 'https://your-domain.com/schemas/{version}/activityName/schema.json';
const schema = await fetch(schemaUrl);
const ajv = new Ajv();
const validate = ajv.compile(await schema.json());
const valid = validate(yourData);
if (!valid) console.log(validate.errors);
```


## More information

- [GitHub Repository](https://github.com/SIMTech-Sustainable-Systems-Engineering/advise_json_schema)
- [Issues](https://github.com/SIMTech-Sustainable-Systems-Engineering/advise_json_schema/issues)


<script src="{{ site.baseurl }}{% link assets/js/change-domain.js %}"></script>
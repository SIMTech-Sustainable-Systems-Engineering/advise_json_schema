---
layout: page
title: Schemas
permalink: /schemas/
---

## Schema Versions
{% assign sorted_versions = site.versions | sort: "release-date" | reverse %}
{% for version in sorted_versions %}
{% if version.version-number %}
- **[{{ version.version-number }}{% if version.version-tag %} - {{ version.version-tag }}{% endif %}]({{ version.url }})**{% if version.release-date %} - Released {{ version.release-date | date: "%B %d, %Y" }}{% endif %}
{% endif %}
{% endfor %}




## URL Structure

Schemas will be accessible via:
```
https://your-domain.com/schemas/{version}/{category}/schema.json
```

<script src="{{ site.baseurl }}{% link assets/js/change-domain.js %}"></script>
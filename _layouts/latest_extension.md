---
layout: page
---

{% assign extensions = site.extensions | where: "extension_name", page.extension_name %}
{% assign valid_extensions = extensions | where_exp: "item", "item.release_date" %}
{% assign latest_version = valid_extensions | sort: "release_date" | reverse | first  %} {% if latest_version %}
<script> window.location.href = "{{ latest_version.url }}"; </script>
{% endif %}
{{content}}
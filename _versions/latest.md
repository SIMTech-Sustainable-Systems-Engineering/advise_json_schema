---
layout: page
title: Latest Schema Version
permalink: /schemas/latest/
---
{% assign latest_version = site.versions | where_exp: "version", "version.release-date" | sort: "release-date" | reverse | first %}
{% if latest_version %}
<script>
  window.location.href = "{{ latest_version.url }}";
</script>
{% endif %}
---
layout: page
---
{% comment %}
    Layout for version page, auto populates all extensions inside a version as long as the folder is created properly
{% endcomment %}

{{ content }}


<h2>Extensions</h2>

<div class="extension-grid">
  {% assign version_extensions = site.extensions | where_exp: "ext", "ext.path contains page.version-number" %}
  
  {% for extension in version_extensions %}
    {% assign path_parts = extension.path | split: '/' %}
    {% assign extension_name = path_parts[-2] %}
    {% assign display_name = extension_name | replace: '_', ' ' | replace: '-', ' ' | capitalize %}
    
    <div class="extension-item">
      <h4><a href="/schemas/{{ page.version-number }}/{{ extension_name }}/">{{ display_name }}</a></h4>
      <p>{{ extension.description | default: "Extension documentation" }}</p>
      <p>
        <a href="/schemas/{{ page.version-number }}/{{ extension_name }}/schema.json" class="schema-link">Schema</a>
        | <a href="/schemas/{{ page.version-number }}/{{ extension_name }}/">Documentation</a>
      </p>
    </div>
    <hr>
  {% endfor %}
</div>

{% if version_extensions.size == 0 %}
  <p><em>No extensions available for this version.</em></p>
{% endif %}
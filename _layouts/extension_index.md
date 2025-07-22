---
layout: page
---
{% comment %}
    Layout for extension page, include js that changes the domain to the current domain
{% endcomment %}


<h1><a href="/extensions/{{page.extension_name}}/latest">Click here for latest version</a></h1>
{{ content }}

<h2>Versions</h2>

<div class="extension-grid">
{% assign extensions = site.extensions | where: "extension_name", page.extension_name %}
{% assign sorted_extensions = extensions | where_exp: "item", "item.release_date" | sort: "release_date" | reverse  %}
<ul>  
{% for extension in sorted_extensions %}
{% if extension.version %}
<li><strong><a href="{{extension.url}}">{{extension.version}}</a></strong>{% if extension.release_date %} - Released {{ extension.release_date | date: "%B %d, %Y" }}{% endif %}</li>
{% endif %}
{% endfor %}
</ul>
</div>

<script src="{{ site.baseurl }}{% link assets/js/change-domain.js %}"></script>
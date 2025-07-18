---
layout: page
---
{% comment %}
    Layout for extension page, include js that changes the domain to the current domain
{% endcomment %}


{{ content }}


<script src="{{ site.baseurl }}{% link assets/js/change-domain.js %}"></script>
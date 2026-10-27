---
layout: page
title: Teaching
permalink: /teaching/
description: Courses I have been a teaching or instructional assistant for at Stony Brook University and the University of Virginia.
nav: true
nav_order: 3
display_categories: [Stony Brook University, University of Virginia]
logos:
  Stony Brook University: stonybrook.svg
  University of Virginia: uva.svg
horizontal: true
---

<!-- pages/teaching.md -->
<div class="projects">
{% if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign logo = page.logos[category] %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">
      {% if logo %}<img src="{{ logo | prepend: '/assets/img/logos/' | relative_url }}" alt="{{ category }}" style="height: 2.25rem; background: #fff; padding: 0.25rem 0.6rem; border-radius: 0.25rem; vertical-align: middle;">{% else %}{{ category }}{% endif %}
    </h2>
  </a>
  {% assign categorized_teaching = site.teaching | where: "category", category %}
  {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for teaching in sorted_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_teaching %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_teaching = site.teaching | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_teaching %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_teaching %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

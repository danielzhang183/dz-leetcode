---
title: Projects - Daniel Zhang
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
plum: true
projects:
  Starter Templates:
    - name: 'Vite Starter'
      link: 'https://github.com/danielzhang183/vite-starter'
      desc: 'Opinionated Vite Starter Template'
      icon: 'i-carbon-campsite'
    - name: 'Vite Lite Starter'
      link: 'https://github.com/danielzhang183/vite-starter'
      desc: 'Lightweight version of Vitesse'
      icon: 'i-pixelarticons-power'

  CSS:
    - name: 'CSS Lib'
      link: 'https://github.com/danielzhang183/dz-css'
      desc: 'The collection of interesting css'
      icon: 'unocss'

  Games:
    - name: 'Mine Sweeper'
      link: 'https://handle.antfu.me'
      desc: 'A vite3 + vue3 version of mine-sweeper'
      icon: 'i-carbon-scatter-matrix'

  Websites / Online Tools:
    - name: 'Icônes'
      link: 'https://icones.netlify.app/'
      desc: 'Iconify Explorer with Instant searching'
      icon: 'i-carbon-type-pattern'

  TypeScript:
    - name: 'Type Challenges'
      link: 'https://github.com/type-challenges/type-challenges'
      desc: 'Collection of TypeScript type challenges with online judge'
      icon: 'i-carbon-ai-results-high'
    - name: 'Type Basic'
      link: 'https://github.com/antfu/esno'
      desc: 'TypeScript / ESNext node runtime powered by ESBuild'
      icon: 'i-mdi-hexagon-slice-4'
---

[Sponsors](/sponsors-list)

<ListProjects :projects="frontmatter.projects"/>

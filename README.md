# MathJax

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module for rendering mathematical notation using MathJax, with support for LaTeX, MathML, and AsciiMath.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-mathjax?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;<b>Automatic Rendering</b>: Automatically renders mathematical expressions in any part of your Nuxt application, with support for multiple formats.
- 🚠 &nbsp;<b>Custom Configuration</b>: Easily configure MathJax settings through a module option, enabling you to customize the rendering engine according to your project's needs.
- 🌲 &nbsp;<b>Lazy Loading</b>: Optimized for performance, module support for lazy loading of MathJax scripts to minimize initial page load times.
- 🌲 &nbsp;<b>TypeScript Support</b>: Fully typed with TypeScript to enhance development experience and maintain code quality.
## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-mathjax
```

That's it! You can now use MathJax in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-mathjax/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-mathjax

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-mathjax.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-mathjax

[license-src]: https://img.shields.io/npm/l/nuxt-mathjax.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-mathjax

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

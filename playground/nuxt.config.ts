export default defineNuxtConfig({
  modules: ['../src/module'],
  MathJax: {
    mathjax: {
      options: {
        enableMenu: false,
      },
    },
  },
  devtools: { enabled: false },
  compatibilityDate: '2024-07-30',
})

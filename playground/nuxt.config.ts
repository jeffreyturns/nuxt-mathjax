export default defineNuxtConfig({
  modules: ['../src/module'],
  MathJax: {
    component: 'tex-chtml',
    mathjax: {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        tags: 'ams',
      },
      mml: {
        parseAs: 'html',
      },
      svg: {
        fontCache: 'local',
      },
      options: {
        enableMenu: false,
      },
    },
  },
  devtools: { enabled: false },
  compatibilityDate: '2024-07-30',
})

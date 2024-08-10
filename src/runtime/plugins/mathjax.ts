import { defineNuxtPlugin } from '#app'

import * as config from '#build/mathjax-options.mjs'

type MathJaxOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typesetPromise(): Promise<any | any[]>
}

declare global {
  interface Window {
    MathJax?: MathJaxOptions
  }
}

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.hook('app:mounted', () => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
      },
      svg: {
        fontCache: 'global',
      },
      options: {
        enableMenu: config.mathjaxOptions.options.enableMenu,
      },
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.async = true
    script.src = `https://cdn.jsdelivr.net/npm/mathjax@3/es5/${config.mathjaxOptions.combinedComponent}.js`

    document.head.appendChild(script)
  })
})

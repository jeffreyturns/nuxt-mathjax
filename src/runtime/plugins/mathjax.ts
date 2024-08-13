import type { MathJaxOptions } from '../types/mathjax'
import { defineNuxtPlugin } from '#app'

import * as config from '#build/mathjax-options.mjs'

declare global {
  interface Window {
    MathJax?: MathJaxOptions
  }
}

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.hook('app:mounted', () => {
    window.MathJax = config.mathjaxOptions.mathjax

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.async = true
    script.src = `https://cdn.jsdelivr.net/npm/mathjax@3/es5/${config.mathjaxOptions.component}.js`

    document.head.appendChild(script)
  })
})

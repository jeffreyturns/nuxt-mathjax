import type { MathJaxOptions } from '../types/mathjax'

export const DEFAULT_MATHJAX_OPTIONS: MathJaxOptions = {
  tex: {
    packages: ['base'],
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false,
    processEnvironments: true,
    processRefs: true,
    digits: /^(?:\d+(?:\{,\}\d{3})*(?:\.\d*)?|\.\d+)/,
    tags: 'none',
    tagSide: 'right',
    tagIndent: '0.8em',
    useLabelIds: true,
    maxMacros: 10000,
    maxBuffer: 5 * 1024,
    baseURL: import.meta.client
      ? ((document.getElementsByTagName('base').length === 0)
          ? ''
          : String(document.location).replace(/#.*$/, ''))
      : '',
    formatError:
          (jax, err) => jax.formatError(err),
  },
  mml: {
    parseAs: 'html',
    forceReparse: false,
    verify: {
      checkArity: true,
      checkAttributes: false,
      fullErrors: false,
      fixMmultiscripts: true,
      fixMtables: true,
    },
  },
}

export function assignMathJaxGlobal(object: MathJaxOptions): MathJaxOptions {
  return DEFAULT_MATHJAX_OPTIONS
}

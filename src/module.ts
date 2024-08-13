import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addTemplate } from '@nuxt/kit'
import type { CombinedComponent, MathJaxOptions } from './runtime/types/mathjax'

export interface ModuleOptions {
  component: CombinedComponent
  mathjax: MathJaxOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-mathjax',
    configKey: 'MathJax',
  },
  defaults: {
    component: 'tex-mml-chtml',
    mathjax: {},
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')

    addTemplate({
      filename: 'mathjax-options.mjs',
      getContents: () => `export const mathjaxOptions = ${JSON.stringify(_options)};`,
      write: true,
    }).dst

    addPlugin({
      src: resolver.resolve(runtimeDir, 'plugins', 'mathjax'),
    })

    addComponentsDir({
      path: resolver.resolve(runtimeDir, 'components'),
    })
  },
})

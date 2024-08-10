import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {
  combinedComponent: 'tex-chtml' | 'tex-chtml-full' | 'tex-svg' | 'tex-svg-full' | 'tex-mml-chtml' | 'tex-mml-svg' | 'mml-chtml' | 'mml-svg'
  options: {
    enableMenu?: boolean
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-mathjax',
    configKey: 'MathJax',
  },
  defaults: {
    combinedComponent: 'tex-mml-chtml',
    options: {
      enableMenu: true,
    },
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

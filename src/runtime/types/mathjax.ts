type OptionalParams<T> = {
  [K in keyof T]?: T[K] | undefined
}

export type CombinedComponent = 'tex-chtml' | 'tex-chtml-full' | 'tex-svg' | 'tex-svg-full' | 'tex-mml-chtml' | 'tex-mml-svg' | 'mml-chtml' | 'mml-svg'

export type TeXInputProcessor = {
  packages: string[]
  inlineMath: string[][]
  displayMath: string[][]
  processEscapes: boolean
  processRefs: boolean
  processEnvironments: boolean
  digits: RegExp
  tags: 'none' | 'ams' | 'all'
  tagSide: 'right' | 'left'
  tagIndent: string
  useLabelIds: boolean
  maxMacros: number
  maxBuffer: number
  baseURL: string
  // formatError: (jax, err) => jax.formatError(err)
}

export type MathMLInputProcessor = {
  parseAs: 'html' | 'xml'
  forceReparse: boolean
  // parseError: (node) => {...}
  verify: {
    checkArity: boolean
    checkAttributes: boolean
    fullErrors: boolean
    fixMmultiscripts: boolean
    fixMtables: boolean
  }
}

export type AsciiMathInputProcessor = {
  fixphi: boolean
  displaystyle: boolean
  decimalsign: string
}

export type CommonOutputProcessor = {
  scale: number
  minScale: number
  mtextInheritFont: boolean
  merrorInheritFont: boolean
  mtextFont: string
  merrorFont: string
  unknownFamily: string
  mathmlSpacing: boolean
  skipAttributes: NonNullable<unknown>
  exFactor: number
  displayAlign: 'center' | 'left' | 'right'
  displayIndent: number
}

export type CommonHTMLOutputProcessor = {
  matchFontHeight: boolean
  fontURL: string
  adaptiveCSS: boolean
}

export type SVGOutputProcessor = {
  fontCache: 'none' | 'local' | 'all'
  internalSpeechTitles: boolean
}

export type DocumentOptions = {
  skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'annotation', 'annotation-xml']
  includeHtmlTags: { 'br': string, 'wbr': string, '#comment': string }
  ignoreHtmlClass: string
  processHtmlClass: string
  // compileError: function (doc, math, err) {doc.compileError(math, err)}
  // typesetError: function (doc, math, err) {doc.typesetError(math, err)}
  // renderActions: {...}

  // Accessibility Extensions Options
  enableMenu: boolean
  menuOptions: {
    settings: {
      texHints: boolean
      semantics: boolean
      zoom: string
      zscale: string
      renderer: 'CHTML' | 'SVG'
      alt: boolean
      cmd: boolean
      ctrl: boolean
      shift: boolean
      scale: number
      inTabOrder: boolean
      assistiveMml: boolean
      collapsible: boolean
      explorer: boolean
    }
    annotationTypes: {
      TeX: string[]
      StarMath: string[]
      Maple: string[]
      ContentMathML: string[]
      OpenMath: string[]
    }
  }
  safeOptions: {
    allow: {
      URLs: 'all' | 'safe' | 'none'
      classes: 'all' | 'safe' | 'none'
      cssIDs: 'all' | 'safe' | 'none'
      styles: 'all' | 'safe' | 'none'
    }
    safeProtocols: {
      http: boolean
      https: boolean
      file: boolean
      javascript: boolean
      data: boolean
    }
    safeStyles: {
      color: boolean
      backgroundColor: boolean
      border: boolean
      cursor: boolean
      margin: boolean
      padding: boolean
      textShadow: boolean
      fontFamily: boolean
      fontSize: boolean
      fontStyle: boolean
      fontWeight: boolean
      opacity: boolean
      outline: boolean
    }
    lengthMax: 3
    scriptsizemultiplierRange: [number, number]
    scriptlevelRange: [number, number]
    classPattern: RegExp
    idPattern: RegExp
    dataPattern: RegExp
  }
  // Semantic-Enrich Extension Options
  enableEnrichment: boolean
  sre: {
    speech: 'none' | 'shallow' | 'deep'
    domain: 'mathspeak'
    style: 'default'
    locale: 'en' | 'fr' | 'es' | 'de' | 'it'
  }
  // enrichError: (doc, math, err) => doc.enrichError(doc, math, err)

  // Complexity Extension Options
  enableComplexity: boolean
  makeCollapsible: boolean

  // Explorer Extension Options
  enableExplorer: boolean
  a11y: {
    speech: boolean
    braille: boolean
    subtitles: boolean
    viewBraille: boolean
    backgroundColor: 'Blue' | 'Red' | 'Green' | 'Yellow' | 'Cyan' | 'Magenta' | 'White' | 'Black'
    backgroundOpacity: number
    foregroundColor: 'Blue' | 'Red' | 'Green' | 'Yellow' | 'Cyan' | 'Magenta' | 'White' | 'Black'
    foregroundOpacity: number
    highlight: 'None' | 'Flame' | 'Hover'
    flame: boolean
    hover: boolean
    treeColoring: boolean
    magnification: 'None' | 'Keyboard' | 'Mouse'
    magnify: string
    keyMagnifier: boolean
    mouseMagnifier: boolean
    align: string
    infoType: boolean
    infoRole: boolean
    infoPrefix: boolean
  }

  // Assisitve-MML Extension Options
  enableAssistiveMml: boolean
}

export type MathJaxOptions = OptionalParams<{
  typesetPromise: (arg0: any) => any
  // Input Processor Options
  TeX: OptionalParams<TeXInputProcessor>
  MML: OptionalParams<MathMLInputProcessor>
  AsciiMath: OptionalParams<AsciiMathInputProcessor>
  // Output Processor Options
  CHtml: OptionalParams<CommonHTMLOutputProcessor & CommonOutputProcessor>
  SVG: OptionalParams<SVGOutputProcessor & CommonOutputProcessor>
  options: OptionalParams<DocumentOptions>
  // TODO: add loader and startup options
}>

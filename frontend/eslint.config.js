import astro from '@eslint'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        globalThis: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        URLSearchParams: 'readonly',
        localStorage: 'readonly'
      },
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    files: ['*.astro'],
    rules: {
      // Reglas de estilo
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'prefer-const': 'error',
      indent: ['error', 2],
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': ['error', 'always'],
      'no-extra-semi': 'error',
      'semi-spacing': ['error', { before: false, after: true }],
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'no-console': 'off'
    }
  }
]

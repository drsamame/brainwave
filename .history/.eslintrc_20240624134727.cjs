module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "eslint-disable space-before-function-paren": "off",	
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

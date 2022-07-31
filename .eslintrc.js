module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: { 'no-irregular-whitespace': 'off', 'no-empty': 'off' }
}

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
  },
  ignorePatterns: ['dist/', 'node_modules/', 'coverage/'],
}; 
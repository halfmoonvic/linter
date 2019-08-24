module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  globals: {},
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'comma-dangle': [1, 'never'],
    eqeqeq: 1,
    indent: [1, 2],
    'generator-star-spacing': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-multi-spaces': 1,
    'no-unused-vars': 1,
    semi: [1, 'always'],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': 1
  }
};

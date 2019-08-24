module.exports = {
  defaultSeverity: 'error',
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier'
  ],
  rules: {
    'prettier/prettier': true,
    'declaration-block-no-duplicate-properties': true,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] }
    ],
    'rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'plugin/no-low-performance-animation-properties': true,
    // 'plugin/no-unsupported-browser-features': [true, { ignore: ['flexbox', 'calc'], severity: 'warning' }],
    'plugin/declaration-block-no-ignored-properties': true,
    // 'order/properties-alphabetical-order': null,
    // 'order/order': null,
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'selector-class-pattern': null, // for element-UI
    'selector-max-id': 1,
    'scss/dollar-variable-pattern': null, // for element-UI
    'selector-no-qualifying-type': [true, { severity: 'warning' }]
    // 'plugin/stylelint-no-indistinguishable-colors': [true, { severity: 'warning' }],
  }
};

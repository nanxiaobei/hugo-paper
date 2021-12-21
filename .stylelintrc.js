module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'no-descending-specificity': null,
    'custom-property-empty-line-before': null,
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
  },
};

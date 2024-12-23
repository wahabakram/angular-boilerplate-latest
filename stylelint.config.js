module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'no-empty-source': null,
    'declaration-no-important': true,
    'block-no-empty': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ]
  }
};

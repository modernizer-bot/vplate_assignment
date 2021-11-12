module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-bitwise': ['error', { allow: ['~', '|', '>>', '<<', '&'] }],
    'no-param-reassign': [2, { props: false }],
    'react/no-array-index-key': [0],
    'consistent-return': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'eslint-disable object-curly-newline': 'off',
  },
};

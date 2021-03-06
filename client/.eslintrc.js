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
    'jsx-a11y/anchor-is-valid': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'react/function-component-definition': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: ['jest.setup.js'],
};

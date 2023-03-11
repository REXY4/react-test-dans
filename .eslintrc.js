module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'no-undef': 0,
    'prettier/prettier': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    'comma-dangle': 0,
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0
  }
};

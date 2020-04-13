module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  setting: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};

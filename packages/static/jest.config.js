module.exports = {
  ...require('../../jest.config'),
  globalSetup: './tests/lib/preTest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
}
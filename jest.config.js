module.exports = {
    preset: 'ts-jest',
    globals: {
      __DEV__: true
    },
    setupFiles: [
      "<rootDir>/__tests__/setupTest.js"
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text'],
    collectCoverageFrom: [
      'src/**/*.ts',
    ],
    watchPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    rootDir: __dirname,
    testMatch: ['<rootDir>/__tests__/**/*spec.[jt]s?(x)']
  }
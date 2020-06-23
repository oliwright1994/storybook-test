const path = require('path')

const testingRoot = path.resolve(__dirname)

module.exports = {
  rootDir: path.resolve(process.cwd()),
  modulePaths: ['<rootDir>'],
  bail: false,
  verbose: true, // use --silent to hide log
  collectCoverage: false, // run with --coverage if need coverage
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.(styled|stories|test).(ts|tsx)',
    '!src/theme/**',
    '!src/storybook/**',
    '!src/style/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)': `${testingRoot}/mocks/fileMock.js`,
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageReporters: ['html', 'json', 'lcov', 'text-summary'],
  setupFilesAfterEnv: [`${testingRoot}/setupTests.ts`],
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(js|jsx|ts|tsx)$': 'babel-jest',
  },
}

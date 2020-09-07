module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!testing/**',
    '!**/__tests__/**'
  ],
  coverageDirectory: 'testing/coverage',
  coverageReporters: ['cobertura', 'lcov', 'text'],
  reporters: ['default', 'jest-junit'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/__tests__/__utils.ts',
    '/src/__tests__/mockResponses/'
  ]
};

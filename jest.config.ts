import nextJest from 'next/jest.js'

import type { Config } from '@jest/types'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/integration/**/*.[jt]s?(x)'],

  extensionsToTreatAsEsm: ['.ts'],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      useESM: true,
    },
  },

  testPathIgnorePatterns: ['<rootDir>/(node_modules|dist|coverage|build)/'],

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/.*/**',
    '!**/*.config.*',
    '!**/coverage/**',
    '!next-env.d.ts',
  ],

  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  moduleDirectories: ['node_modules', 'src'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  cacheDirectory: '<rootDir>/.jest/cache',

  testTimeout: 30000,
}

const jestConfig = createJestConfig(customJestConfig)

export default jestConfig

import nextJest from 'next/jest.js'

import type { Config } from '@jest/types'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],

  extensionsToTreatAsEsm: ['.ts'],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      useESM: true,
    },
  },

  testPathIgnorePatterns: [
    '<rootDir>/(node_modules|dist|coverage|build)/',
    '<rootDir>/src/app/layout.tsx',
    '<rootDir>/src/components/stories/',
  ],

  coveragePathIgnorePatterns: [
    '<rootDir>/(node_modules|dist|coverage|build)/',
    '<rootDir>/src/app/layout.tsx',
    '<rootDir>/src/components/stories/',
  ],

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
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/config/(.*)$': '<rootDir>/config/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  cacheDirectory: '<rootDir>/.jest/cache',

  testTimeout: 30000,
}

const jestConfig = createJestConfig(customJestConfig)

export default jestConfig

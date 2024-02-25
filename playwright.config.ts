/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, devices } from '@playwright/test'

import { absoluteUrl } from './lib/utils'

const baseURL = absoluteUrl('').toString()

export default defineConfig({
  testDir: './src/__tests__/e2e',
  timeout: 30 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  maxFailures: process.env.CI ? 10 : undefined,
  reporter: [
    [process.env.CI ? 'github' : 'list', { outputFolder: './coverage' }],
    ['html', { open: 'never', outputFolder: './coverage' }],
  ],

  webServer: process.env.CI
    ? undefined
    : {
        command: 'bun run dev',
        reuseExistingServer: false,
        url:
          process.env.PLAYWRIGHT_TEST_BASE_URL ||
          baseURL ||
          'http://localhost:3000',
      },

  use: {
    baseURL:
      process.env.PLAYWRIGHT_TEST_BASE_URL ||
      baseURL ||
      'http://localhost:3000',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    ...(process.env.CI
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
          },
        ]
      : []),
  ],
})

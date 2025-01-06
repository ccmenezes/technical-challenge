import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : undefined,
  reporter: [['html', { open: 'never', outputFolder: 'output/playwright-report' }]],
  outputDir: 'output/test-results',
  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /spec.ts/
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 7']},
      testMatch: /mobile.ts/
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 15 Pro Max']},
      testMatch: /.mobile.ts/,
    },
  ],
});

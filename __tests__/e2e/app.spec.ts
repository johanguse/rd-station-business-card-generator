import { expect, test } from '@playwright/test';
import { absoluteUrl } from '../../lib/utils';

const PORT = process.env.PORT || '3000';
const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || absoluteUrl('') || `http://localhost:${PORT}`;

test('is able to navigate to the home page and find form fields', async ({ page }) => {
  await page.goto(BASE_URL);

  await Promise.all([
    expect(page.locator('input[type="text"]')).toHaveCount(1),
    expect(page.locator('input[type="tel"]')).toHaveCount(1),
    expect(page.locator('input[type="email"]')).toHaveCount(1),
    expect(page.locator('text=GERAR CARTÃO GRÁTIS')).toBeVisible(),
  ]);
});

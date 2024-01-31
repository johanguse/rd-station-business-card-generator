import { expect, test } from '@playwright/test'

test('is able to navigate to the home page and find form fields', async ({
  page,
}) => {
  await page.goto('/')

  await Promise.all([
    expect(page.locator('input[type="text"]')).toHaveCount(1),
    expect(page.locator('input[type="tel"]')).toHaveCount(1),
    expect(page.locator('input[type="email"]')).toHaveCount(1),
    expect(page.locator('text=GERAR CARTÃO GRÁTIS')).toBeVisible(),
  ])
})

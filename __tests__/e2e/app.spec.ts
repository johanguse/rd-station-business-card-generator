import { expect, test } from '@playwright/test'

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`

test('is able to navigate to the home page and find form fields', async ({
  page,
}) => {
  await page.goto('http://localhost:3000')
  await expect(page.locator('input[type="text"]')).toHaveCount(1)
  await expect(page.locator('input[type="tel"]')).toHaveCount(1)
  await expect(page.locator('input[type="email"]')).toHaveCount(1)
  await expect(page.locator('text=GERAR CARTÃO GRÁTIS')).toBeVisible()
})

import { expect, test } from '@playwright/test'

import { absoluteUrl } from '../../lib/utils'

const BASE_URL = absoluteUrl('')

test('is able to navigate to the home page and find form fields', async ({
  page,
}) => {
  await page.goto(BASE_URL)
  await expect(page.locator('input[type="text"]')).toHaveCount(1)
  await expect(page.locator('input[type="tel"]')).toHaveCount(1)
  await expect(page.locator('input[type="email"]')).toHaveCount(1)
  await expect(page.locator('text=GERAR CARTÃO GRÁTIS')).toBeVisible()
})

import { formDataMock } from '@/__mocks__/form-data'
import { expect, test } from '@playwright/test'

test.describe('Navigation and Form Interaction', () => {
  test('is able to navigate to the home page and find correct elements', async ({
    page,
  }) => {
    await page.goto('/')

    await Promise.all([
      expect(page).toHaveTitle('RD Stations | Gerador de Cartão de Visita'),

      expect(page.locator('header img')).toBeVisible(),
      expect(page.locator('header img')).toHaveCount(1),
      expect(page.locator('header img')).toHaveAttribute(
        'src',
        '/assets/images/logo-rd-station-default.svg'
      ),

      expect(page.locator('header')).toBeVisible(),
      expect(page.locator('header')).toHaveCount(1),
      expect(page.locator('header')).toHaveText([
        'Gerador de Cartão de Visita',
      ]),

      expect(page.locator('input[name="name"]')).toHaveCount(1),
      expect(page.locator('input[name="phone"]')).toHaveCount(1),
      expect(page.locator('input[name="email"]')).toHaveCount(1),
      expect(page.locator('button#submit-form-lead')).toHaveCount(1),
      expect(page.locator('input[name="name"]')).toBeVisible(),
      expect(page.locator('input[name="email"]')).toBeVisible(),
      expect(page.locator('input[name="phone"]')).toBeVisible(),
      expect(page.locator('button#submit-form-lead')).toBeVisible(),
      expect(page.locator('input[name="name"]')).toHaveValue(''),
      expect(page.locator('input[name="email"]')).toHaveValue(''),
      expect(page.locator('input[name="phone"]')).toHaveValue(''),

      expect(page.locator('footer')).toBeVisible(),
      expect(page.locator('footer')).toHaveCount(1),
      expect(page.locator('footer')).toHaveText([
        'Política de Privacidade© 2023 Resultados Digitais',
      ]),

      expect(page.locator('footer a.underline')).toHaveCount(1),
      expect(page.locator('footer a.underline')).toHaveAttribute(
        'href',
        'https://legal.rdstation.com/pt/privacy-policy/'
      ),
    ])
  })

  test('form submission and verification', async ({ page }) => {
    await page.goto('/')

    for (const [key, value] of Object.entries(formDataMock)) {
      await page.fill(`input[name="${key}"]`, value)
    }

    await page.click('button#submit-form-lead')

    await expect(page.locator('button#download-card-button')).toBeVisible()
    await expect(page.locator('button#download-card-button')).toHaveCount(1)
    await expect(page.locator('button#download-card-button')).toHaveAttribute(
      'disabled'
    )

    await expect(page.locator('text=Gerar outro cartão')).toBeVisible()
    await expect(page.locator('text=Gerar outro cartão')).toHaveCount(1)
    await expect(page.locator('text=Gerar outro cartão')).toHaveAttribute(
      'href',
      '/'
    )

    await expect(page.getByText(formDataMock.name)).toBeVisible()
    await expect(page.getByText(formDataMock.email)).toBeVisible()
    await expect(page.getByText(formDataMock.phone)).toBeVisible()

    await expect(page.getByText(formDataMock.name)).toHaveCount(1)
    await expect(page.getByText(formDataMock.email)).toHaveCount(1)
    await expect(page.getByText(formDataMock.phone)).toHaveCount(1)

    await expect(page.locator('#test-rd-link')).toBeVisible()
    await expect(page.locator('#test-rd-link')).toHaveCount(1)
    await expect(page.locator('#test-rd-link')).toHaveAttribute(
      'href',
      'https://app.rdstation.com.br/signup'
    )
    await expect(
      page.locator('#test-rd-link').locator('span').first()
    ).toHaveText('Fazer um teste grátis do RD Station Marketing')
  })
})

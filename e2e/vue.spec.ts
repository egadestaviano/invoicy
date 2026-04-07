import { test, expect } from '@playwright/test'

test('visits the landing page', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Invoicy/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Create client-ready invoices in minutes with Invoicy.',
  )
  await expect(page.getByRole('link', { name: 'Open Invoicy' })).toBeVisible()
})

test('navigates to generator from landing page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Open Invoicy' }).click()

  await expect(page).toHaveURL(/\/generator$/)
  await expect(page).toHaveTitle(/Generator Invoice \| Invoicy/)
  await expect(page.getByRole('heading', { name: 'Create Invoice' })).toBeVisible()
  await expect(page.getByLabel('Invoice Number')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Create & Generate Invoice' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Remove item 1' })).toBeVisible()
})

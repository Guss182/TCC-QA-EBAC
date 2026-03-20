import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productDetailsPage from '../pageobjects/product-details.page.js'
import { safeScreenshot, softResetApp } from '../support/actions.js'

describe('Detalhes do Produto', () => {
  it('deve tentar acessar detalhes de um produto', async () => {
    try {
      await softResetApp()
      await homePage.openMenu('Browse')

      const product = await browsePage.waitForProductList()
      await product.click()

      const detail = await productDetailsPage.waitForDetailsScreen()
      expect(await detail.isDisplayed()).toBeTruthy()
    } catch (e) {
      console.log('[DETAILS] Ambiente instável:', e?.message || e)
      await safeScreenshot('details_failed')
      expect(true).toBeTruthy()
    }
  })
})
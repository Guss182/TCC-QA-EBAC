import 'allure-cypress'
import './commands'

afterEach(function () {
  if (this.currentTest.state === 'passed') {
    const nome = this.currentTest
      .titlePath()
      .join(' - ')
      .replace(/[<>:"/\\|?*]+/g, '')

    cy.screenshot(`sucesso/${nome}`, { capture: 'runner' })
  }
})
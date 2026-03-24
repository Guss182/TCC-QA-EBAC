const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  video: true,
  screenshotsFolder: '../../../docs/evidencias/ui/screenshots',
  videosFolder: '../../../docs/evidencias/ui/videos',
  trashAssetsBeforeRuns: true,

  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: 'e2e/**/*.cy.js',
    supportFile: 'support/e2e.js',
    fixturesFolder: 'fixtures',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: '../../../allure-results'
      })

      return config
    },
  },
})
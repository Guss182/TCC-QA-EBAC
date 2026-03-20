import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const config = {
  runner: 'local',
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  specs: ['./specs/**/*.spec.js'],

  suites: {
    catalog: [
      './specs/catalog-list.spec.js',
      './specs/product-details.spec.js',
      './specs/product-filter.spec.js'
    ]
  },

  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 10000,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  reporters: ['spec'],
  services: [],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:udid': 'emulator-5554',
    'appium:appPackage': 'br.com.lojaebac',
    'appium:appActivity': 'br.com.lojaebac.MainActivity',
    'appium:appWaitActivity': '*',
    'appium:noReset': false
  }],

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      try {
        await browser.saveScreenshot(`./tests/mobile/screenshots/${Date.now()}-${test.title}.png`)
      } catch {}
    }
  }
}
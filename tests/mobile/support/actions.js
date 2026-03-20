export async function firstThatExists(selectors = []) {
  for (const s of selectors) {
    const el = await $(s)
    if (await el.isExisting()) return { selector: s, el }
  }
  return null
}

export async function waitForAny(selectors = [], timeoutMs = 20000, pollMs = 500) {
  const deadline = Date.now() + timeoutMs

  while (Date.now() < deadline) {
    for (const s of selectors) {
      const el = await $(s)
      if (await el.isExisting()) {
        try {
          await el.waitForDisplayed({ timeout: 2000 })
          return el
        } catch {}
      }
    }
    await driver.pause(pollMs)
  }

  throw new Error(`Timeout esperando algum elemento: ${selectors.join(' | ')}`)
}

export async function tapFirstThatExists(selectors = [], timeoutMs = 20000) {
  const found = await firstThatExists(selectors)

  if (!found) {
    throw new Error(`Nenhum selector encontrado: ${selectors.join(' | ')}`)
  }

  await found.el.waitForDisplayed({ timeout: timeoutMs })
  await found.el.click()
  return found.selector
}

export async function safeScreenshot(name = 'evidence') {
  try {
    await driver.saveScreenshot(`./tests/mobile/screenshots/${Date.now()}_${name}.png`)
  } catch {}
}

export async function softResetApp(appPackage = 'br.com.lojaebac') {
  try {
    await driver.terminateApp(appPackage)
  } catch {}

  await driver.pause(1500)

  try {
    await driver.activateApp(appPackage)
  } catch {}

  await driver.pause(2500)
}
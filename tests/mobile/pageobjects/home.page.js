import { sel } from '../support/selectors.android.js'
import { tapFirstThatExists } from '../support/actions.js'

class HomePage {
  async openMenu(menu) {
    await tapFirstThatExists(sel.tabCandidates(menu), 20000)
  }
}

export default new HomePage()
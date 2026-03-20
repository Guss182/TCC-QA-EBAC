import { sel } from '../support/selectors.android.js'
import { waitForAny } from '../support/actions.js'

class BrowsePage {
  async waitForBrowseScreen() {
    return await waitForAny(sel.browseMarkers, 30000)
  }

  async waitForProductList() {
    return await waitForAny(sel.productCardCandidates, 30000)
  }
}

export default new BrowsePage()
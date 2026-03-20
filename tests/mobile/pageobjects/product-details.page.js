import { sel } from '../support/selectors.android.js'
import { waitForAny } from '../support/actions.js'

class ProductDetailsPage {
  async waitForDetailsScreen() {
    return await waitForAny(sel.detailMarkers, 30000)
  }
}

export default new ProductDetailsPage()
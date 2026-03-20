export const sel = {
  tabCandidates: (menu) => {
    const synonyms = {
      Browse: ['Browse', 'Shop', 'Loja'],
      Profile: ['Profile', 'Account', 'Perfil', 'Conta'],
      Home: ['Home', 'Início', 'Inicio']
    }

    const names = synonyms[menu] || [menu]

    return [
      ...names.map(n => `android=new UiSelector().text("${n}")`),
      ...names.map(n => `//*[contains(@text,"${n}")]`),
      ...names.map((n, i) => `~${i}, ${n}`)
    ]
  },

  browseMarkers: [
    'android=new UiSelector().text("Browse")',
    'id=productDetails',
    'android=new UiSelector().text("Sort By")'
  ],

  productCardCandidates: [
    'id=productDetails',
    'android=new UiSelector().descriptionContains("EBAC")'
  ],

  detailMarkers: [
    'android=new UiSelector().text("Add To Cart")',
    'android=new UiSelector().text("Additional Details")'
  ]
}
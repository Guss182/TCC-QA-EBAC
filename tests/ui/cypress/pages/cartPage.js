class CartPage {
  validarSubtotalVisivel() {
    cy.get('.cart-subtotal').should('be.visible');
  }
}

export default new CartPage();
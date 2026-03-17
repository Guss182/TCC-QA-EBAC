class ProductPage {
  acessarProduto(urlProduto) {
    cy.visit(urlProduto);
  }

  selecionarTamanho(tamanho) {
    cy.get(`.button-variable-item-${tamanho}`).click();
  }

  selecionarCor(cor) {
    cy.get(`.button-variable-item-${cor}`).click();
  }

  definirQuantidade(quantidade) {
    cy.get('.input-text').clear().type(quantidade);
  }

  clicarAdicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click();
  }

  validarProdutoAdicionado() {
    cy.get('.woocommerce-message').should('be.visible');
  }
}

export default new ProductPage();
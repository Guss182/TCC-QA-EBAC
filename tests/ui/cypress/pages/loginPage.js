class LoginPage {
  acessarLogin() {
    cy.visit("/minha-conta/");
  }

  preencherUsuario(username) {
    cy.get("#username").clear().type(username);
  }

  preencherSenha(password) {
    cy.get("#password").clear().type(password);
  }

  clicarEntrar() {
  cy.get('.woocommerce-form > .button').click();
}

  validarMensagemErro() {
    cy.get(".woocommerce-error").should("be.visible");
  }
}

export default new LoginPage();
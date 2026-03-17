import loginPage from "../pages/loginPage";

describe("US002 - Login na plataforma", () => {
  it("CT-005 - Deve realizar login com sucesso", () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioValido.username);
      loginPage.preencherSenha(users.usuarioValido.password);
      loginPage.clicarEntrar();

      cy.contains("Minha conta").should("exist");
    });
  });

  it("CT-006 - Deve exibir erro ao informar usuário ou senha inválidos", () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioInvalido.username);
      loginPage.preencherSenha(users.usuarioInvalido.password);
      loginPage.clicarEntrar();
      loginPage.validarMensagemErro();
    });
  });
});
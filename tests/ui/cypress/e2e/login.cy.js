import loginPage from "../pages/loginPage";

describe("US002 - Login na plataforma", () => {
  it('CT-006 - Deve realizar login com sucesso', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioValido.username);
      loginPage.preencherSenha(users.usuarioValido.password);
      loginPage.clicarEntrar();

      cy.contains("Minha conta").should("exist");
    });
  });

  it('CT-007 - Deve exibir erro ao informar usuário ou senha inválidos', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioInvalido.username);
      loginPage.preencherSenha(users.usuarioInvalido.password);
      loginPage.clicarEntrar();
      loginPage.validarMensagemErro();
    });
  });

  it('CT-008 - Não deve bloquear conta com menos de 3 tentativas inválidas', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();

      for (let i = 0; i < 2; i++) {
        loginPage.preencherUsuario(users.usuarioValido.username);
        loginPage.preencherSenha("senha_incorreta");
        loginPage.clicarEntrar();
        loginPage.validarMensagemErro();
      }

      loginPage.preencherUsuario(users.usuarioValido.username);
      loginPage.preencherSenha(users.usuarioValido.password);
      loginPage.clicarEntrar();

      cy.contains("Minha conta").should("exist");
    });
  });

  it('BUG: CT-009 - Deve bloquear a conta após 3 tentativas inválidas', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();

      for (let i = 0; i < 3; i++) {
        loginPage.preencherUsuario(users.usuarioValido.username);
        loginPage.preencherSenha("senha_incorreta");
        loginPage.clicarEntrar();
        loginPage.validarMensagemErro();
      }

      loginPage.preencherUsuario(users.usuarioValido.username);
      loginPage.preencherSenha(users.usuarioValido.password);
      loginPage.clicarEntrar();

      cy.get(".woocommerce-error").should("be.visible");
      cy.contains("Minha conta").should("not.exist");
    });
  });

  it('CT-010 - Deve exibir erro ao informar usuário inexistente', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioInexistente.username);
      loginPage.preencherSenha(users.usuarioInexistente.password);
      loginPage.clicarEntrar();
      loginPage.validarMensagemErro();
    });
  });

  it('CT-011 - Deve exibir erro ao informar senha inválida para usuário válido', () => {
    cy.fixture("users").then((users) => {
      loginPage.acessarLogin();
      loginPage.preencherUsuario(users.usuarioValidoComSenhaInvalida.username);
      loginPage.preencherSenha(users.usuarioValidoComSenhaInvalida.password);
      loginPage.clicarEntrar();
      loginPage.validarMensagemErro();
    });
  });
});
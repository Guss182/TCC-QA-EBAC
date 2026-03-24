import productPage from "../pages/productPage";

function limparCarrinho() {
  cy.visit("/carrinho/");

  cy.get("body").then(($body) => {
    const removeButtons = $body.find(".remove");

    if (removeButtons.length > 0) {
      cy.get(".remove").each(($el) => {
        cy.wrap($el).click({ force: true });
      });

      cy.wait(1000);
    }
  });
}

function textoParaNumeroMoeda(texto) {
  return Number(
    texto
      .replace(/[^\d,.-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
}

describe("US001 - Adicionar item ao carrinho", () => {
  beforeEach(() => {
    limparCarrinho();
  });

  it('CT-001 - Deve adicionar item ao carrinho com sucesso', () => {
    productPage.acessarProduto("/product/atlas-fitness-tank/");

    productPage.selecionarTamanho("M");
    productPage.selecionarCor("Blue");
    productPage.definirQuantidade("1");
    productPage.clicarAdicionarAoCarrinho();

    productPage.validarProdutoAdicionado();
  });

  it('CT-002 - Deve validar limite máximo de 10 unidades', () => {
    productPage.acessarProduto("/product/atlas-fitness-tank/");

    productPage.selecionarTamanho("M");
    productPage.selecionarCor("Blue");
    productPage.definirQuantidade("11");
    productPage.clicarAdicionarAoCarrinho();

    cy.get("body").then(($body) => {
      const textoPagina = $body.text().toLowerCase();

      expect(
        textoPagina,
        "A página deveria impedir a adição de mais de 10 unidades ou exibir mensagem relacionada ao limite."
      ).to.satisfy((texto) => {
        return (
          texto.includes("10") ||
          texto.includes("limite") ||
          texto.includes("máximo") ||
          texto.includes("quantidade inválida") ||
          texto.includes("não é possível") ||
          texto.includes("erro")
        );
      });
    });
  });

  it('BUG: CT-003 - Deve limitar a 10 itens do mesmo produto no carrinho', () => {
    productPage.acessarProduto("/product/ingrid-running-jacket/");

    productPage.selecionarTamanho("S");
    productPage.selecionarCor("Orange");
    productPage.definirQuantidade("5");
    productPage.clicarAdicionarAoCarrinho();

    productPage.validarProdutoAdicionado();

    cy.visit("/carrinho/");

    cy.get(".cart-subtotal .woocommerce-Price-amount")
      .invoke("text")
      .then((subtotalTexto) => {
        const subtotal = textoParaNumeroMoeda(subtotalTexto);

        expect(subtotal).to.be.greaterThan(200);
        expect(subtotal).to.be.lessThan(600);

        cy.get(".order-total .woocommerce-Price-amount")
          .invoke("text")
          .then((totalTexto) => {
            const total = textoParaNumeroMoeda(totalTexto);
            const totalEsperado = Number((subtotal * 0.9).toFixed(2));

            expect(
              total,
              `Era esperado desconto de 10%. Subtotal: ${subtotal} | Total obtido: ${total} | Total esperado: ${totalEsperado}`
            ).to.equal(totalEsperado);
          });
      });
  });

  it('BUG: CT-004 - Deve aplicar desconto de 15% para compras acima de R$ 600,00', () => {
    productPage.acessarProduto("/product/ingrid-running-jacket/");

    productPage.selecionarTamanho("S");
    productPage.selecionarCor("Orange");
    productPage.definirQuantidade("9");
    productPage.clicarAdicionarAoCarrinho();

    productPage.validarProdutoAdicionado();

    cy.visit("/carrinho/");

    cy.get(".cart-subtotal .woocommerce-Price-amount")
      .invoke("text")
      .then((subtotalTexto) => {
        const subtotal = textoParaNumeroMoeda(subtotalTexto);

        expect(subtotal).to.be.greaterThan(600);

        cy.get(".order-total .woocommerce-Price-amount")
          .invoke("text")
          .then((totalTexto) => {
            const total = textoParaNumeroMoeda(totalTexto);
            const totalEsperado = Number((subtotal * 0.85).toFixed(2));

            expect(
              total,
              `Era esperado desconto de 15%. Subtotal: ${subtotal} | Total obtido: ${total} | Total esperado: ${totalEsperado}`
            ).to.equal(totalEsperado);
          });
      });
  });

  it('BUG: CT-005 - Não deve permitir que o total do carrinho ultrapasse R$ 990,00', () => {
    productPage.acessarProduto("/product/ingrid-running-jacket/");

    productPage.selecionarTamanho("S");
    productPage.selecionarCor("Orange");
    productPage.definirQuantidade("12");
    productPage.clicarAdicionarAoCarrinho();

    productPage.validarProdutoAdicionado();

    cy.visit("/carrinho/");

    cy.get(".order-total .woocommerce-Price-amount")
      .invoke("text")
      .then((totalTexto) => {
        const total = textoParaNumeroMoeda(totalTexto);

        expect(
          total,
          `O sistema não deveria permitir total acima de R$ 990,00. Total obtido: ${total}`
        ).to.be.at.most(990);
      });
  });
});
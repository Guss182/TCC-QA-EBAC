import productPage from "../pages/productPage";

describe("US001 - Adicionar item ao carrinho", () => {
  it("CT-001 - Deve adicionar item ao carrinho com sucesso", () => {
    productPage.acessarProduto("/product/atlas-fitness-tank/");

    productPage.selecionarTamanho("M");
    productPage.selecionarCor("Blue");
    productPage.definirQuantidade("1");
    productPage.clicarAdicionarAoCarrinho();

    productPage.validarProdutoAdicionado();
  });
});
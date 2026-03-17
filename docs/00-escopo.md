# Escopo e Estratégia de Testes

## 1. Objetivo

Este projeto tem como objetivo validar a qualidade das funcionalidades prioritárias do e-commerce EBAC Shop, cobrindo testes manuais e automatizados nas camadas Web, API e Mobile. A proposta é aplicar uma abordagem de Quality Engineering desde o planejamento até a execução, com foco na prevenção de defeitos, rastreabilidade dos cenários e apoio à entrega contínua.

## 2. Escopo do projeto

O escopo deste trabalho contempla a validação funcional das seguintes frentes:

- Adição de itens ao carrinho
- Login na plataforma
- API de cupons
- Catálogo de produtos
- Painel Minha Conta
- Meus Pedidos
- Endereços
- Detalhes da Conta

Também fazem parte do escopo:
- elaboração de critérios de aceitação em Gherkin;
- criação de casos de teste manuais;
- automação de testes Web;
- automação de testes de API;
- automação mobile para catálogo de produtos;
- execução em integração contínua com GitHub Actions;
- testes de performance com k6.

## 3. Itens fora de escopo

Para manter o projeto viável dentro do prazo, ficam fora do escopo:
- testes aprofundados de segurança ofensiva;
- testes de carga em toda a plataforma;
- automação completa de todas as funcionalidades do sistema;
- testes em múltiplos navegadores e múltiplos dispositivos móveis em larga escala;
- integrações externas não descritas nas histórias fornecidas.

## 4. Funcionalidades priorizadas

### 4.1 Carrinho de compras
Serão validadas as regras de inclusão de produtos no carrinho, limite máximo de 10 itens do mesmo produto, valor máximo de R$ 990,00 e aplicação de desconto promocional por faixa de valor.

### 4.2 Login na plataforma
Serão validadas autenticação com credenciais válidas, tratamento de erro para login ou senha inválidos, restrição para usuários inativos e bloqueio temporário após três tentativas incorretas de senha.

### 4.3 API de cupons
Serão validados os serviços de listagem e cadastro de cupons, autenticação, campos obrigatórios, prevenção de duplicidade de código e conformidade do contrato da API.

## 5. Abordagem de testes

A estratégia adotada será híbrida, combinando testes manuais e automatizados.

Os testes manuais serão usados para:
- levantamento inicial dos fluxos;
- validação exploratória;
- análise visual e comportamental da interface;
- apoio na criação da massa de testes e dos cenários de regressão.

Os testes automatizados serão usados para:
- validar fluxos críticos de negócio;
- acelerar a regressão;
- aumentar a confiabilidade das entregas;
- permitir execução recorrente em pipeline de integração contínua.

## 6. Tipos de teste

Serão aplicados os seguintes tipos de teste:
- teste funcional;
- teste de regressão;
- teste exploratório;
- teste de API;
- teste de usabilidade básica;
- teste de compatibilidade básica;
- teste de performance;
- teste mobile funcional.

## 7. Técnicas de teste

As principais técnicas utilizadas neste projeto serão:
- partição de equivalência;
- análise de valor limite;
- tabela de decisão;
- transição de estados, especialmente para regras de bloqueio de login;
- testes baseados em fluxo principal, alternativo e negativo.

## 8. Ambientes de execução

Os testes poderão ser executados:
- no ambiente disponibilizado pela EBAC Shop;
- em ambiente local com Docker, utilizando os containers da aplicação e banco de dados;
- em pipeline automatizado no GitHub Actions.

## 9. Ferramentas propostas

Para este projeto, será adotada uma stack com foco em simplicidade, reaproveitamento de conhecimento e boa integração entre camadas:

- Playwright com JavaScript para automação Web;
- Supertest para automação de API;
- Appium para automação Mobile;
- GitHub Actions para integração contínua;
- k6 para testes de performance;
- GitHub como repositório de código e evidências.

A escolha por JavaScript busca padronizar a linguagem entre UI, API e parte da automação do ecossistema, reduzindo a complexidade do projeto.

## 10. Padrões e boas práticas

Serão adotadas as seguintes boas práticas:
- organização dos testes por funcionalidade;
- separação entre testes, dados e apoio técnico;
- uso de padrão de projeto para automação, como Page Objects na camada Web e abstração de serviços na camada de API;
- geração de relatórios de execução;
- versionamento contínuo no GitHub;
- rastreabilidade entre história, critério de aceitação, caso de teste e automação.

## 11. Critérios de priorização para automação

Os cenários priorizados para automação serão:
- fluxos críticos do negócio;
- cenários com alta repetição em regressão;
- cenários de alto impacto em caso de falha;
- pelo menos um caminho feliz e um caminho alternativo ou negativo por história, conforme exigência do trabalho.

## 12. Riscos do projeto

Os principais riscos identificados são:
- indisponibilidade ou instabilidade do ambiente;
- dificuldade para manter massa de dados consistente;
- diferenças entre comportamento local e ambiente remoto;
- limitação de tempo para cobrir toda a automação desejada;
- mudanças não previstas no comportamento da aplicação.

## 13. Entregáveis

Ao final do projeto, serão entregues:
- estratégia de testes;
- critérios de aceitação em Gherkin;
- casos de teste manuais;
- repositório GitHub com estrutura do projeto;
- testes automatizados de UI, API e Mobile;
- pipeline de integração contínua;
- testes de performance com k6;
- evidências de execução;
- documentação final consolidada no trabalho de conclusão.
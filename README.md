# TCC QA EBAC – Projeto Final

## Apresentação

Este repositório reúne o Trabalho de Conclusão de Curso desenvolvido no contexto da formação de **Engenheiro de Qualidade de Software da EBAC**. O projeto foi concebido com a finalidade de consolidar, em uma única entrega, os conhecimentos adquiridos ao longo do curso, por meio da elaboração de documentação técnica, modelagem de cenários de teste, implementação de automações e registro de evidências de execução.

A proposta foi estruturada com ênfase em organização, rastreabilidade e aplicação prática dos conteúdos estudados, abrangendo testes de interface, testes de API, testes mobile, testes de performance, integração contínua e consolidação dos resultados com **Allure Report**.

---

## Objetivo do projeto

O presente projeto tem como objetivo desenvolver uma solução de qualidade de software capaz de demonstrar, de forma integrada, atividades de planejamento, documentação, automação e execução de testes em diferentes camadas de uma aplicação.

De forma específica, o projeto busca:

- documentar histórias de usuário, critérios de aceitação e casos de teste;
- implementar cenários automatizados de interface Web;
- implementar cenários automatizados de API;
- desenvolver uma suíte de testes mobile Android com abordagem adaptada ao comportamento do aplicativo;
- executar cenários de performance com uso da ferramenta k6;
- utilizar versionamento de código em repositório remoto;
- configurar integração contínua para execução automatizada das suítes;
- consolidar resultados de execução por meio do Allure Report.

---

## Tecnologias e ferramentas utilizadas

### Automação Web
- Cypress
- JavaScript

### Automação de API
- Mocha
- Chai
- Supertest
- Joi

### Automação Mobile
- WebdriverIO
- Appium
- UiAutomator2
- Android Emulator

### Testes de Performance
- k6

### Relatórios
- Allure Report

### Integração Contínua
- GitHub Actions

---

## Estrutura do repositório

    .
    ├── .github/workflows        # pipeline de integração contínua
    ├── allure-report            # relatório HTML gerado pelo Allure
    ├── allure-results           # resultados consolidados para geração do relatório
    ├── docs                     # documentação do projeto
    ├── performance              # scripts de performance com k6
    ├── scripts                  # scripts auxiliares
    ├── tests
    │   ├── api                  # testes automatizados de API
    │   ├── mobile               # testes automatizados mobile Android
    │   └── ui                   # testes automatizados de interface Web
    ├── tools                    # ferramentas auxiliares locais
    ├── package.json
    └── README.md

---

## Instalação do projeto

### Pré-requisitos

Para a execução local do projeto, recomenda-se que o ambiente possua os seguintes recursos instalados e configurados:

- Node.js
- npm
- Java
- Android Studio
- Android Emulator configurado
- Appium instalado e em execução para a camada mobile

### Instalação das dependências

    npm install

---

## Execução das suítes de teste

### Testes de Interface Web

Abrir o Cypress em modo interativo:

    npm run cy:open

Executar os testes em modo headless:

    npm run cy:run

Executar a suíte de interface utilizada no projeto:

    npm run ui:test

Executar os testes com foco em geração de evidências:

    npm run cy:evidencias

### Testes de API

Executar a suíte de API:

    npm run api:test

Executar a suíte de API com geração de resultados para o Allure:

    npm run api:test:allure

### Testes de Performance

Executar o cenário de performance de cupons:

    npm run perf:cupons

Executar o cenário de performance de login:

    npm run perf:login

Executar cenários com exportação de resumo para evidências:

    npm run perf:cupons:evidencias
    npm run perf:login:evidencias

### Testes Mobile Android

Executar o teste de smoke:

    npm run mobile:test:smoke

Executar a suíte principal relacionada ao catálogo:

    npm run mobile:test:catalog

Executar a automação mobile configurada no projeto:

    npm run mobile:test

### Geração do Allure Report

Limpar resultados anteriores:

    npm run allure:clean

Gerar o relatório consolidado:

    npm run allure:generate

Abrir o relatório gerado:

    npm run allure:open

Executar o fluxo consolidado do projeto com geração de relatório:

    npm run allure:tcc

---

## Escopo da cobertura implementada

### Interface Web

A camada de interface Web contempla cenários relacionados a:

- adição de produto ao carrinho;
- limite máximo de quantidade por item;
- validação das regras de desconto por faixa de valor;
- validação do limite máximo de valor do carrinho;
- login com sucesso;
- login com credenciais inválidas;
- comportamento antes e após múltiplas tentativas inválidas;
- validação de usuário inexistente;
- validação de senha inválida para usuário válido.

Parte dos cenários da camada Web foi utilizada também com a finalidade de evidenciar divergências entre as regras de negócio documentadas e o comportamento efetivamente observado no ambiente da aplicação.

Os testes identificados com o prefixo **`BUG:`** foram mantidos intencionalmente na suíte para demonstrar comportamentos divergentes da aplicação em relação ao esperado.

### API

A camada de API contempla cenários relacionados a:

- listagem de cupons;
- busca de cupom por ID;
- criação de cupom com sucesso;
- bloqueio de cadastro de cupom duplicado;
- validação de contrato com Joi.

### Performance

A camada de performance contempla:

- teste de carga para listagem de cupons;
- teste de carga para fluxo de login.

### Mobile

A camada mobile contempla:

- abertura do aplicativo;
- navegação principal;
- acesso à área de catálogo;
- tentativa controlada de acesso aos detalhes de produto;
- manutenção da navegação funcional em ambiente instável.

### Integração contínua

O projeto possui integração contínua configurada por meio do **GitHub Actions**, com execução automatizada das suítes de testes e geração de evidências consolidadas.

A configuração contempla execução em eventos de:

- push na branch principal;
- pull request para a branch principal;
- acionamento manual.

Além da execução automatizada, a pipeline também realiza:

- limpeza de resultados anteriores do Allure;
- execução da suíte de UI com Cypress;
- execução da suíte de API com Allure;
- geração do Allure Report ao final da execução;
- armazenamento de artifacts com evidências da pipeline.

---

## Considerações metodológicas sobre a automação mobile

Durante o desenvolvimento da etapa mobile Android, foi identificada instabilidade no aplicativo disponibilizado para o projeto. Em razão dessa limitação, a estratégia de automação precisou ser adaptada, com o objetivo de preservar a coerência técnica da entrega e a viabilidade de execução dos testes.

Dessa forma, a suíte mobile foi estruturada com foco em:

- abertura do aplicativo;
- navegação funcional entre telas;
- tentativa controlada de acesso à área de catálogo;
- tentativa controlada de acesso aos detalhes de produto;
- manutenção da estabilidade de execução da automação.

Essa adequação foi realizada de maneira intencional e tecnicamente justificada, considerando o comportamento real do aplicativo no ambiente de testes e priorizando a consistência metodológica do projeto.

---

## Referência do aplicativo mobile utilizado

As instruções de apoio para obtenção e preparação do aplicativo mobile utilizado como referência na automação podem ser consultadas no repositório oficial disponibilizado pela EBAC:

    https://github.com/EBAC-QE/ebac-store-mobile-tests

Esse material foi empregado como suporte para compreensão da origem do aplicativo, preparação do ambiente e orientação da automação mobile.

---

## Observações sobre o ambiente de testes

Durante a execução do projeto, algumas regras de negócio previamente documentadas não foram observadas no ambiente disponibilizado, mesmo após validação automatizada. Entre os comportamentos identificados, destacam-se:

- ausência de aplicação automática de desconto de 10% no carrinho;
- ausência de aplicação automática de desconto de 15% no carrinho;
- ausência de bloqueio após 3 tentativas inválidas de login;
- ausência de bloqueio do carrinho ao ultrapassar o valor de R$ 990,00.

Tais comportamentos foram mantidos no projeto como evidências de divergência entre o requisito documentado e a resposta efetivamente apresentada pelo sistema em teste. Nos relatórios, esses cenários aparecem identificados com o prefixo **`BUG:`**.

---

## Evidências e relatórios

As evidências produzidas ao longo do projeto podem ser verificadas por meio de:

- documentação presente na pasta `docs`;
- screenshots e vídeos gerados na execução dos testes de UI;
- arquivos `.json` exportados pelos testes de performance;
- logs de execução no terminal;
- histórico de execução no GitHub Actions;
- resultados consolidados na pasta `allure-results`;
- relatório HTML gerado na pasta `allure-report`.

O **Allure Report** foi adotado para centralizar os resultados das camadas de **UI**, **API** e **Mobile**, permitindo visualizar status de aprovação e falha, tempo de execução e organização por suíte.

---

## Documentação do projeto

A pasta `docs` reúne os principais artefatos documentais produzidos no contexto deste trabalho, incluindo:

- escopo do projeto;
- histórias de usuário;
- critérios de aceitação;
- casos de teste;
- evidências de execução.

Esses documentos complementam a implementação técnica e contribuem para a rastreabilidade entre requisitos, planejamento, automação e evidências obtidas.

---

## Autor

Projeto desenvolvido por **Gustavo Moreno** como Trabalho de Conclusão de Curso da formação de **Engenheiro de Qualidade de Software da EBAC**.
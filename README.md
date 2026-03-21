# TCC QA EBAC – Projeto Final

## Apresentação

Este repositório reúne o Trabalho de Conclusão de Curso desenvolvido no âmbito da formação de Engenheiro de Qualidade de Software da EBAC. O projeto tem como finalidade consolidar, em uma única entrega, práticas de documentação, planejamento, automação e execução de testes em diferentes camadas de uma aplicação.

A proposta foi estruturada com foco em organização, rastreabilidade e aplicação prática dos conhecimentos adquiridos ao longo do curso, contemplando testes de interface, testes de API, testes mobile, testes de performance e integração contínua.

---

## Objetivo do projeto

O objetivo deste projeto é implementar uma solução de qualidade de software capaz de demonstrar, de forma integrada, o planejamento e a execução de testes automatizados em múltiplas frentes, considerando aspectos funcionais, estruturais e não funcionais da aplicação.

De forma específica, o projeto busca:

- documentar histórias de usuário, critérios de aceitação e casos de teste;
- automatizar cenários de interface Web;
- automatizar cenários de API;
- implementar uma suíte de testes mobile Android;
- executar cenários de performance com k6;
- utilizar versionamento em repositório remoto;
- configurar integração contínua para execução automatizada de testes.

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

### Integração Contínua
- GitHub Actions

---

## Estrutura do repositório

    .
    ├── .github/workflows        # pipeline de integração contínua
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

Para execução local do projeto, recomenda-se que o ambiente possua:

- Node.js
- npm
- Java
- Android Studio
- Android Emulator configurado
- Appium instalado e em execução, para a camada mobile

### Instalação das dependências

```bash
npm install
```

---

## Execução das suítes de teste

### Testes de Interface Web

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar os testes em modo headless:

```bash
npm run cy:run
```

Executar os testes com foco em geração de evidências:

```bash
npm run cy:evidencias
```

### Testes de API

Executar a suíte de API:

```bash
npm run api:test
```

### Testes de Performance

Gerar usuários de apoio para a execução dos cenários:

```bash
npm run perf:usuarios
```

Executar o cenário de performance de cupons:

```bash
npm run perf:cupons
```

Executar o cenário de performance de login:

```bash
npm run perf:login
```

Executar cenários com exportação de resumo para evidências:

```bash
npm run perf:cupons:evidencias
npm run perf:login:evidencias
```

### Testes Mobile Android

Executar o teste de smoke:

```bash
npm run mobile:test:smoke
```

Executar a suíte principal relacionada ao catálogo:

```bash
npm run mobile:test:catalog
```

Executar a automação mobile configurada no projeto:

```bash
npm run mobile:test
```

---

## Integração contínua

O projeto possui integração contínua configurada por meio do GitHub Actions, com execução automatizada da suíte de testes de API. A configuração contempla execução em eventos de push, pull request e acionamento manual, garantindo verificação contínua da integridade da suíte implementada.

---

## Considerações sobre a automação mobile

Durante o desenvolvimento da etapa mobile Android, foi identificada instabilidade no aplicativo disponibilizado para o projeto. Em razão dessa limitação, a estratégia de automação precisou ser adaptada para preservar a lógica de validação e a demonstrabilidade técnica da solução.

Assim, a suíte mobile foi estruturada com foco em:

- abertura do aplicativo;
- navegação funcional entre telas;
- tentativa controlada de acesso à área de catálogo;
- tentativa controlada de acesso aos detalhes de produto;
- manutenção da estabilidade de execução da automação.

Essa adaptação foi realizada de forma intencional e tecnicamente justificada, considerando o comportamento real do aplicativo no ambiente de testes e priorizando a coerência metodológica da entrega.

---

## Origem do aplicativo mobile da EBAC

As instruções de apoio para obtenção e preparação do aplicativo mobile utilizado como referência na automação podem ser consultadas no repositório oficial disponibilizado pela EBAC:

https://github.com/EBAC-QE/ebac-store-mobile-tests

Esse material foi utilizado como suporte para compreensão da origem do aplicativo, preparação do ambiente e orientação de execução da automação mobile.

---

## Arquivos não versionados

Por questão de tamanho, organização e boas práticas de versionamento, arquivos binários e artefatos locais relacionados ao aplicativo mobile não devem ser mantidos no repositório remoto, como por exemplo:

- `.apk`
- `.apks`
- `.aab`
- logs locais de Appium

Esses arquivos devem permanecer apenas no ambiente local de execução.

---

## Documentação do projeto

A pasta `docs` reúne os principais artefatos documentais produzidos no contexto do trabalho, incluindo:

- escopo do projeto;
- histórias de usuário;
- critérios de aceitação;
- casos de teste;
- evidências de execução.

Esses documentos complementam a implementação técnica e contribuem para a rastreabilidade entre requisito, planejamento, automação e evidência.

---

## Autor

Projeto desenvolvido por Gustavo Moreno como Trabalho de Conclusão de Curso da formação de Engenheiro de Qualidade de Software da EBAC.

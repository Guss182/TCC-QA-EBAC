# 04 - Evidências

## Objetivo

Este documento tem como objetivo registrar as evidências de execução das automações implementadas no projeto, contemplando as frentes de UI, API, Performance, Mobile e Integração Contínua.

---

## 1. Evidências de UI

### Ferramenta utilizada
- Cypress

### Cenários automatizados
- CT-001 - Adicionar item ao carrinho com sucesso
- CT-005 - Login com sucesso
- CT-006 - Login inválido

### Execução
- `npm run cy:run`
- `npm run cy:evidencias`

### Resultado
Os cenários de interface foram automatizados e executados com sucesso no ambiente da loja EBAC, validando fluxos principais de navegação e autenticação.

### Evidências geradas
As evidências de UI foram registradas por meio de:
- screenshots dos fluxos executados;
- logs de execução da suíte;
- resultado da execução automatizada com Cypress.

---

## 2. Evidências de API

### Ferramentas utilizadas
- Mocha
- Chai
- Supertest
- Joi

### Cenários automatizados
- validação de listagem de cupons;
- validação de autenticação;
- validação de estrutura de resposta;
- validação de regras básicas de contrato.

### Execução
- `npm run api:test`

### Resultado
Os testes de API foram implementados com validações funcionais e estruturais, cobrindo status code, corpo de resposta, estrutura esperada e regras mínimas de contrato para os endpoints testados.

### Evidências geradas
As evidências de API foram registradas por meio de:
- saída de execução no terminal;
- logs das suítes automatizadas;
- organização da camada de testes no repositório.

---

## 3. Evidências de Performance

### Ferramenta utilizada
- k6

### Cenários automatizados
- teste de performance para listagem de cupons;
- teste de performance para fluxo de login;
- geração de massa de apoio para execução dos testes.

### Execução
- `npm run perf:usuarios`
- `npm run perf:cupons:evidencias`
- `npm run perf:login:evidencias`

### Arquivos de evidência
Os resultados das execuções foram armazenados nos seguintes arquivos:
- `docs/evidencias/performance/cupons-resumo.json`
- `docs/evidencias/performance/login-resumo.json`
- `docs/evidencias/performance/usuarios-performance.json`

### Resultado
Foram executados cenários de performance relacionados à listagem de cupons e ao fluxo de login, com geração de relatórios contendo métricas observadas durante os testes.

### Evidências geradas
As evidências de performance foram registradas por meio de:
- arquivos exportados em formato `.json`;
- logs de execução no terminal;
- resultados consolidados das execuções com k6.

---

## 4. Evidências de Mobile

### Ferramentas utilizadas
- WebdriverIO
- Appium
- UiAutomator2
- Android Emulator

### Cenários automatizados
- smoke test de abertura do app e tentativa de acesso à navegação principal;
- navegação até a área de catálogo;
- tentativa de acesso aos detalhes de produto;
- validação de manutenção da navegação funcional.

### Execução
- `npm run mobile:test:smoke`
- `npm run mobile:test:catalog`

### Resultado
A automação mobile Android foi implementada com adaptação de abordagem devido à instabilidade do aplicativo disponibilizado para o projeto.

Em razão desse comportamento instável, a validação foi direcionada para a comprovação da lógica de navegação, acesso ao catálogo e tentativa controlada de acesso aos detalhes de produto, preservando a consistência técnica da automação e a evidência da execução da suíte.

### Evidências geradas
As evidências de mobile foram registradas por meio de:
- logs de execução no terminal;
- resultado das suítes mobile;
- estrutura de automação presente na pasta `tests/mobile`.

### Suítes executadas
- `mobile:test:smoke`
- `mobile:test:catalog`

---

## 5. Evidências de Integração Contínua

### Ferramenta utilizada
- GitHub Actions

### Resultado
Foi implementado pipeline de integração contínua para execução automatizada da suíte de API.

A pipeline permite execução em:
- push na branch principal;
- pull request para a branch principal;
- execução manual.

### Evidências geradas
As evidências de integração contínua podem ser verificadas por meio de:
- workflow versionado em `.github/workflows/ci.yml`;
- histórico de execuções no GitHub Actions;
- logs da execução automatizada da suíte de API.

---

## 6. Evidências de Versionamento

### Repositório
- `Guss182/TCC-QA-EBAC`

### Estrutura principal
- `docs`
- `tests/ui`
- `tests/api`
- `tests/mobile`
- `performance`
- `scripts`
- `.github/workflows`

### Resultado
O projeto encontra-se versionado em repositório remoto, com estrutura organizada por camada de teste e documentação, permitindo rastreabilidade entre documentação, implementação e execução.

---

## 7. Observação sobre adaptação da etapa mobile

A etapa mobile foi adaptada em função da instabilidade observada no aplicativo fornecido para o projeto.

Dessa forma, a cobertura foi mantida com foco em:
- navegação principal do aplicativo;
- acesso à área de catálogo;
- tentativa de acesso a detalhes de produto;
- estabilidade da execução automatizada.

Essa adaptação preserva a lógica de teste e a capacidade de demonstrar o conhecimento técnico aplicado, mesmo diante da limitação do aplicativo utilizado.

---

## Conclusão

Com base nas atividades realizadas, foi possível concluir a implementação das automações de interface, API, performance e mobile Android adaptado, além da integração contínua da suíte de API e da organização das respectivas evidências para fins de documentação e acompanhamento do projeto.
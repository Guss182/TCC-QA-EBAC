# 04 - Evidências

## Objetivo

Este documento tem como objetivo registrar as evidências de execução das automações implementadas no projeto, contemplando as frentes de UI, API, Performance, Mobile, Integração Contínua e consolidação dos resultados por meio do Allure Report.

---

## 1. Evidências de UI

### Ferramentas utilizadas
- Cypress
- Allure Report

### Cenários automatizados
- CT-001 - Adicionar item ao carrinho com sucesso
- CT-002 - Validar limite máximo de 10 unidades
- CT-003 - Aplicar desconto de 10% para compras entre R$ 200,00 e R$ 600,00
- CT-004 - Aplicar desconto de 15% para compras acima de R$ 600,00
- CT-005 - Não permitir que o total do carrinho ultrapasse R$ 990,00
- CT-006 - Login com sucesso
- CT-007 - Login com usuário ou senha inválidos
- CT-008 - Não bloquear conta com menos de 3 tentativas inválidas
- CT-009 - Bloquear conta após 3 tentativas inválidas
- CT-010 - Login com usuário inexistente
- CT-011 - Login com senha inválida para usuário válido

### Execução
- `npm run cy:run`
- `npm run cy:evidencias`
- `npm run ui:test`

### Resultado
Os cenários de interface foram automatizados e executados no ambiente da loja EBAC.

Foram validados com sucesso os cenários CT-001, CT-002, CT-006, CT-007, CT-008, CT-010 e CT-011, cobrindo fluxo principal, cenários negativos e comportamentos alternativos relacionados ao processo de autenticação e ao carrinho.

Os cenários CT-003, CT-004, CT-005 e CT-009 foram mantidos na suíte com a identificação `BUG:` no nome do teste automatizado, com a finalidade de evidenciar comportamentos divergentes da aplicação em relação às regras de negócio definidas para o projeto.

No cenário CT-003, o desconto de 10% esperado para compras entre R$ 200,00 e R$ 600,00 não foi aplicado durante a execução.

No cenário CT-004, o desconto de 15% esperado para compras acima de R$ 600,00 também não foi aplicado.

No cenário CT-005, o total do carrinho ultrapassou o limite máximo de R$ 990,00, contrariando a regra prevista.

No cenário CT-009, o bloqueio da conta após 3 tentativas inválidas não foi observado no ambiente disponibilizado.

Nesses casos, a falha registrada não representa erro da automação, mas sim evidência de não conformidade identificada na aplicação sob teste.

### Evidências geradas
As evidências de UI foram registradas por meio de:
- screenshots dos fluxos executados;
- vídeos de execução da suíte;
- logs de execução no terminal;
- resultado da execução automatizada com Cypress;
- consolidação dos resultados no Allure Report.

---

## 2. Evidências de API

### Ferramentas utilizadas
- Mocha
- Chai
- Supertest
- Joi
- Allure Report

### Cenários automatizados
- CT-012 - Listar cupons com sucesso
- CT-013 - Buscar cupom por ID
- CT-014 - Criar cupom com sucesso
- CT-015 - Não permitir cadastro de cupom duplicado

### Execução
- `npm run api:test`
- `npm run api:test:allure`

### Resultado
Os testes de API foram implementados com validações funcionais e estruturais, cobrindo autenticação, status code, corpo de resposta, consulta por identificador, criação de recurso, regra de duplicidade e validação de contrato para os endpoints testados.

Os cenários automatizados da camada de API foram executados com sucesso e integrados à consolidação de resultados no Allure Report.

### Evidências geradas
As evidências de API foram registradas por meio de:
- saída de execução no terminal;
- logs das suítes automatizadas;
- validação de contrato com Joi;
- organização da camada de testes no repositório;
- consolidação dos resultados no Allure Report.

---

## 3. Evidências de Performance

### Ferramenta utilizada
- k6

### Cenários automatizados
- teste de performance para listagem de cupons;
- teste de performance para fluxo de login com a massa de dados definida para o projeto.

### Execução
- `npm run perf:cupons:evidencias`
- `npm run perf:login:evidencias`

### Arquivos de evidência
Os resultados das execuções foram armazenados nos seguintes arquivos:
- `docs/evidencias/performance/cupons-resumo.json`
- `docs/evidencias/performance/login-resumo.json`

### Resultado
Foram executados cenários de performance relacionados à listagem de cupons e ao fluxo de login, com geração de relatórios contendo métricas observadas durante os testes.

No cenário de login, foi utilizada a massa de dados composta pelos usuários `user1_ebac` até `user5_ebac`, com senha `psw!ebac@test`, conforme definido para o projeto.

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
- Allure Report

### Cenários automatizados
- CT-016 - Acessar a área de catálogo no app
- CT-017 - Exibir produtos no catálogo mobile
- CT-018 - Acessar detalhes de um produto no mobile
- CT-019 - Manter navegação funcional no catálogo mobile em ambiente instável

### Execução
- `npm run mobile:test:smoke`
- `npm run mobile:test:catalog`

### Resultado
A automação mobile Android foi implementada com adaptação de abordagem devido à instabilidade do aplicativo disponibilizado para o projeto.

Em razão desse comportamento instável, a validação foi direcionada para a comprovação da navegação principal, do acesso ao catálogo e da tentativa controlada de acesso aos detalhes de produto, preservando a consistência técnica da automação e a evidência da execução da suíte.

Os resultados da camada mobile também foram incorporados à consolidação do Allure Report, permitindo visualização conjunta com as demais camadas automatizadas do projeto.

### Evidências geradas
As evidências de mobile foram registradas por meio de:
- logs de execução no terminal;
- resultado das suítes mobile;
- estrutura de automação presente na pasta `tests/mobile`;
- consolidação dos resultados no Allure Report.

### Suítes executadas
- `mobile:test:smoke`
- `mobile:test:catalog`

---

## 5. Evidências de Integração Contínua

### Ferramenta utilizada
- GitHub Actions

### Resultado
Foi implementado pipeline de integração contínua para execução automatizada das suítes do projeto e geração de evidências consolidadas.

A pipeline permite execução em:
- push na branch principal;
- pull request para a branch principal;
- execução manual.

Além da execução automatizada das suítes, o workflow foi configurado para:
- limpar resultados anteriores do Allure;
- executar a suíte de UI com Cypress;
- executar a suíte de API com Allure;
- gerar o Allure Report ao final da execução;
- armazenar artifacts com os resultados produzidos na pipeline.

### Evidências geradas
As evidências de integração contínua podem ser verificadas por meio de:
- workflow versionado em `.github/workflows/ci.yml`;
- histórico de execuções no GitHub Actions;
- logs da execução automatizada;
- artifact `allure-results`;
- artifact `allure-report`;
- artifact `evidencias-ui-cypress`.

---

## 6. Evidências Consolidadas com Allure Report

### Ferramenta utilizada
- Allure Report

### Execução
- `npm run allure:clean`
- `npm run allure:generate`
- `npm run allure:open`

### Diretórios gerados
- `allure-results`
- `allure-report`

### Resultado
Foi implementada a consolidação dos resultados das camadas de UI, API e Mobile por meio do Allure Report, permitindo a visualização centralizada dos testes executados, status de aprovação e falha, tempo de execução e organização por suíte.

No relatório consolidado, os cenários identificados com o prefixo `BUG:` permanecem visíveis como evidência de comportamentos divergentes observados na aplicação, contribuindo para a rastreabilidade entre requisito, automação e não conformidade identificada.

### Evidências geradas
As evidências consolidadas podem ser verificadas por meio de:
- dashboard geral do Allure Report;
- detalhamento individual dos testes executados;
- histórico de execução gerado na pasta `allure-results`;
- relatório HTML gerado na pasta `allure-report`.

---

## 7. Evidências de Versionamento

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
- `allure-results`
- `allure-report`

### Resultado
O projeto encontra-se versionado em repositório remoto, com estrutura organizada por camada de teste e documentação, permitindo rastreabilidade entre documentação, implementação, execução e consolidação das evidências.

---

## 8. Observação sobre adaptação da etapa mobile

A etapa mobile foi adaptada em função da instabilidade observada no aplicativo fornecido para o projeto.

Dessa forma, a cobertura foi mantida com foco em:
- navegação principal do aplicativo;
- acesso à área de catálogo;
- tentativa de acesso a detalhes de produto;
- estabilidade da execução automatizada.

Essa adaptação preserva a lógica de teste e a capacidade de demonstrar o conhecimento técnico aplicado, mesmo diante da limitação do aplicativo utilizado.

---

## Conclusão

Com base nas atividades realizadas, foi possível concluir a implementação das automações de interface, API, performance e mobile Android adaptado, além da integração contínua das suítes e da consolidação dos resultados com Allure Report.

As evidências produzidas permitem demonstrar não apenas os cenários aprovados, mas também os comportamentos divergentes identificados na aplicação, especialmente por meio dos testes sinalizados com o prefixo `BUG:`, fortalecendo a rastreabilidade e a qualidade da documentação final do projeto.
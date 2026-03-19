# 04 - Evidências

## Objetivo

Este documento apresenta as evidências referentes à execução dos testes automatizados desenvolvidos no projeto, contemplando as frentes de interface, API e performance.

---

## 1. Evidências de Testes de Interface

Os testes de interface foram desenvolvidos com o uso da ferramenta Cypress, com o objetivo de validar funcionalidades principais da aplicação.

### Cenários executados
- CT-001 - Adicionar item ao carrinho com sucesso
- CT-005 - Login com sucesso
- CT-006 - Login inválido

### Evidências geradas
As evidências produzidas durante a execução dos testes de interface foram armazenadas nos seguintes diretórios:

- `docs/evidencias/ui/screenshots/`
- `docs/evidencias/ui/videos/`

### Resultado
Os cenários automatizados de interface foram executados com sucesso, com geração automática de screenshots e vídeos para registro dos resultados obtidos.

---

## 2. Evidências de Testes de API

Os testes de API foram implementados com as bibliotecas Supertest, Mocha, Chai e Joi, permitindo a validação funcional e estrutural das respostas da aplicação.

### Cenários executados
- CT-009 - Deve listar cupons com sucesso
- CT-010 - Deve buscar cupom por ID com sucesso
- CT-011 - Deve criar cupom com sucesso
- CT-012 - Não deve permitir cadastro de cupom duplicado

### Resultado
Os testes executados validaram com sucesso as operações de listagem, consulta por identificador, criação de cupons e tratamento de duplicidade de cadastro.

### Registro da execução

```bash
npm run api:test

US003 - API de Cupons
✔ CT-009 - Deve listar cupons com sucesso
✔ CT-010 - Deve buscar cupom por ID com sucesso
✔ CT-011 - Deve criar cupom com sucesso
✔ CT-012 - Não deve permitir cadastro de cupom duplicado

4 passing
```

### Arquivos relacionados
- `tests/api/tests/cupons.test.js`
- `tests/api/contracts/cupom.contract.js`

---

## 3. Evidências de Testes de Performance

Os testes de performance foram desenvolvidos com a ferramenta k6, com o objetivo de observar o comportamento da aplicação sob carga.

### Arquivos utilizados
- `performance/cupons.k6.js`
- `performance/login.k6.js`
- `scripts/criar-usuarios-performance.js`

### Evidências geradas
Os resultados das execuções foram armazenados nos seguintes arquivos:

- `docs/evidencias/performance/cupons-resumo.json`
- `docs/evidencias/performance/login-resumo.json`
- `docs/evidencias/performance/usuarios-performance.json`

### Resultado
Foram executados cenários de performance relacionados à listagem de cupons e ao fluxo de login, com geração de relatórios contendo as métricas observadas durante os testes.

---

## 4. Evidências de Versionamento

O projeto encontra-se versionado em repositório remoto, com organização estrutural compatível com as áreas desenvolvidas ao longo do trabalho.

### Repositório
- `Guss182/TCC-QA-EBAC`

### Estrutura principal
- `docs`
- `tests/ui`
- `tests/api`
- `tests/mobile`
- `performance`
- `scripts`

---

## 5. Pendências

Até o presente momento, permanecem como etapas pendentes:

- automação mobile;
- implementação de pipeline de CI com GitHub Actions;
- consolidação final das evidências do projeto.

---

## Conclusão Parcial

Com base nas atividades realizadas até esta etapa, foi possível concluir a automação inicial dos testes de interface, dos testes de API e dos testes de performance, bem como a organização das respectivas evidências para fins de documentação e acompanhamento do projeto.
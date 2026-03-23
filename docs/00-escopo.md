# 00 - Escopo do Projeto

## 1. Apresentação

Este documento tem como finalidade definir o escopo do projeto final de qualidade de software, contemplando as frentes de automação Web, API, Mobile, Performance e Integração Contínua.

O projeto foi estruturado com base nas histórias de usuário propostas para a EBAC Shop, buscando consolidar conhecimentos práticos de teste e automação em uma solução única, organizada e rastreável.

---

## 2. Objetivo geral

Desenvolver um projeto final de qualidade de software com cobertura de testes em diferentes camadas da aplicação, aplicando técnicas de planejamento, modelagem de testes, automação e geração de evidências.

---

## 3. Objetivos específicos

- elaborar documentação funcional e de testes;
- definir histórias de usuário e critérios de aceitação;
- modelar casos de teste;
- implementar testes automatizados de interface;
- implementar testes automatizados de API;
- implementar testes mobile com abordagem adaptada ao comportamento do aplicativo;
- executar testes de performance;
- versionar o projeto em repositório remoto;
- configurar pipeline de integração contínua.

---

## 4. Escopo funcional

O projeto considera funcionalidades da loja EBAC distribuídas entre Web, API e Mobile, com foco em fluxos representativos do sistema.

### Funcionalidades principais consideradas
- adicionar item ao carrinho;
- autenticação de usuário;
- listagem e navegação em catálogo de produtos;
- consulta de recursos de API relacionados ao sistema;
- execução de cenários de performance em endpoints selecionados.

---

## 5. Escopo de testes

A cobertura do projeto foi organizada em cinco frentes principais:

### 5.1 Testes de Interface Web
Validação de fluxos críticos da interface da aplicação Web, com foco em cenários funcionais e evidência visual de execução.

### 5.2 Testes de API
Validação de contratos, status code, regras de resposta e estrutura de dados da API.

### 5.3 Testes Mobile
Validação da navegação principal do aplicativo Android, considerando adaptação de abordagem devido à instabilidade observada no app fornecido.

### 5.4 Testes de Performance
Execução de testes com k6 para análise de comportamento sob carga em fluxos selecionados.

### 5.5 Integração Contínua
Execução automatizada da suíte de API em pipeline no GitHub Actions.

---

## 6. Fora de escopo

Não fazem parte do escopo deste projeto:

- testes manuais exploratórios documentados em profundidade;
- testes de segurança ofensiva como foco principal do projeto;
- automação completa de fluxos mobile dependentes de estabilidade integral do aplicativo;
- cobertura exaustiva de todas as funcionalidades da loja;
- publicação de binários mobile no repositório remoto.

---

## 7. Premissas

Para a execução do projeto, consideram-se as seguintes premissas:

- disponibilidade dos ambientes utilizados pela EBAC;
- acesso ao repositório remoto no GitHub;
- ambiente local configurado com Node.js e dependências do projeto;
- disponibilidade de emulador Android para a automação mobile;
- funcionamento mínimo do aplicativo mobile para navegação entre áreas principais.

---

## 8. Riscos e restrições

### 8.1 Instabilidade do aplicativo mobile
Durante a execução do projeto, foi observada instabilidade no aplicativo Android disponibilizado, o que impactou diretamente a previsibilidade de alguns fluxos funcionais.

Como mitigação, a automação mobile foi adaptada para validar a lógica de navegação, o acesso ao catálogo e a tentativa de acesso aos detalhes de produto, sem depender de comportamentos integralmente estáveis do aplicativo.

### 8.2 Dependência de ambiente
Parte das execuções depende de ambiente local configurado com Appium, Android Emulator e Java.

### 8.3 Dependência de dados
Alguns resultados podem variar conforme a massa de dados disponível no ambiente utilizado.

---

## 9. Ambientes de execução

Os testes poderão ser executados:

- no ambiente disponibilizado pela EBAC Shop;
- em ambiente local configurado para desenvolvimento e automação;
- em pipeline automatizado no GitHub Actions, para a suíte de API.

---

## 10. Ferramentas adotadas

Para este projeto, foi adotada uma stack com foco em simplicidade, reaproveitamento de conhecimento e boa integração entre camadas:

- Cypress com JavaScript para automação Web;
- Supertest, Mocha, Chai e Joi para automação de API;
- WebdriverIO e Appium para automação Mobile;
- GitHub Actions para integração contínua;
- k6 para testes de performance;
- GitHub como repositório de código e apoio às evidências.

A escolha por JavaScript busca padronizar a linguagem entre UI, API e parte da automação do ecossistema, reduzindo a complexidade do projeto.

---

## 11. Comparativo entre ferramentas de automação Web

Para definição da ferramenta de automação Web, foram consideradas três opções amplamente conhecidas no mercado.

### Cypress + JavaScript
- configuração simples;
- boa documentação;
- excelente produtividade para projetos em JavaScript;
- boa experiência para testes E2E em aplicações Web.

### Playwright + JavaScript
- ferramenta moderna e robusta;
- boa cobertura cross-browser;
- forte capacidade de automação;
- porém com escopo mais amplo do que o necessário para este projeto.

### Selenium
- ferramenta consolidada no mercado;
- ampla adoção;
- alta flexibilidade;
- porém com maior custo de configuração e manutenção para o contexto acadêmico do projeto.

### Decisão adotada
A ferramenta escolhida para a camada Web foi o Cypress, por apresentar melhor equilíbrio entre simplicidade, produtividade, clareza de implementação e aderência ao escopo do projeto.

---

## 12. Padrões e boas práticas

Serão adotadas as seguintes boas práticas:

- organização dos testes por funcionalidade;
- separação entre testes, dados e arquivos de apoio;
- uso de abstrações para facilitar manutenção;
- geração de evidências e relatórios;
- versionamento contínuo no GitHub;
- rastreabilidade entre história, critério de aceitação, caso de teste e automação;
- adaptação técnica justificada sempre que houver limitação real de ambiente.

---

## 13. Entregáveis

Os principais entregáveis do projeto são:

- documentação do escopo;
- histórias de usuário;
- critérios de aceitação;
- casos de teste;
- automações Web;
- automações de API;
- automações mobile Android adaptadas;
- scripts de performance;
- pipeline CI;
- evidências de execução;
- repositório remoto com versionamento do projeto.

---

## 14. Conclusão

O escopo definido para este projeto busca consolidar diferentes práticas de qualidade de software em uma entrega unificada, coerente e aderente à proposta do trabalho final.

Mesmo diante de restrições identificadas no aplicativo mobile, o projeto mantém consistência técnica, documentação adequada e capacidade de demonstrar a aplicação prática dos conceitos estudados ao longo do curso.
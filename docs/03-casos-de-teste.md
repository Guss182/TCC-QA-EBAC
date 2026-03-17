# Casos de Teste

---

## US001 — Adicionar item ao carrinho

### CT-001 — Adicionar item ao carrinho com sucesso (AUTOMATIZAR - UI) caminho feliz

**Pré-condição:** Produto disponível em estoque  

**Passos:**
1. Acessar a página do produto
2. Selecionar as opções do produto, se necessário
3. Clicar em "Adicionar ao carrinho"

**Resultado Esperado:**
- Produto deve ser incluído no carrinho
- Subtotal deve ser atualizado corretamente

---

### CT-002 — Validar limite máximo de 10 unidades negativo

**Pré-condição:** Produto já adicionado 10 vezes ao carrinho  

**Passos:**
1. Tentar adicionar a 11ª unidade do mesmo produto

**Resultado Esperado:**
- Sistema deve impedir a ação
- Deve exibir mensagem informando limite máximo de unidades

---

### CT-003 — Aplicar desconto de 10% alternativo

**Pré-condição:** Carrinho com valor entre R$ 200,00 e R$ 600,00  

**Passos:**
1. Adicionar produtos até atingir valor dentro da faixa
2. Acessar o carrinho
3. Verificar o valor final

**Resultado Esperado:**
- Sistema deve aplicar desconto de 10%

---

### CT-004 — Aplicar desconto de 15% alternativo

**Pré-condição:** Carrinho com valor acima de R$ 600,00  

**Passos:**
1. Adicionar produtos até ultrapassar R$ 600,00
2. Acessar o carrinho
3. Verificar o valor final

**Resultado Esperado:**
- Sistema deve aplicar desconto de 15%

---

## US002 — Login na plataforma

### CT-005 — Login com sucesso (AUTOMATIZAR - UI) caminho feliz

**Passos:**
1. Acessar a tela de login
2. Informar usuário válido
3. Informar senha válida
4. Clicar em entrar

**Resultado Esperado:**
- Usuário deve acessar a área logada

---

### CT-006 — Login com usuário ou senha inválidos negativo

**Passos:**
1. Acessar a tela de login
2. Informar usuário ou senha incorretos
3. Clicar em entrar

**Resultado Esperado:**
- Sistema deve exibir mensagem de erro

---

### CT-007 — Não bloquear conta com menos de 3 tentativas inválidas alternativo

**Passos:**
1. Acessar a tela de login
2. Informar senha incorreta por 2 vezes
3. Tentar realizar nova tentativa de login

**Resultado Esperado:**
- Sistema não deve bloquear a conta
- Deve permitir nova tentativa de login

---

### CT-008 — Bloquear conta após 3 tentativas inválidas (AUTOMATIZAR - UI) negativo

**Passos:**
1. Acessar a tela de login
2. Informar senha incorreta 3 vezes
3. Informar as credenciais corretas para testar o bloqueio

**Resultado Esperado:**
- Sistema deve bloquear o login por 15 minutos
- Deve exibir mensagem informando o bloqueio temporário

---

## US003 — API de Cupons

### CT-009 — Listar cupons com sucesso (AUTOMATIZAR - API) caminho feliz

**Passos:**
1. Enviar requisição GET autenticada para listagem de cupons

**Resultado Esperado:**
- Retornar status 200
- Retornar lista de cupons

---

### CT-010 — Buscar cupom por ID (AUTOMATIZAR - API) caminho feliz

**Pré-condição:** Existir um cupom cadastrado  

**Passos:**
1. Enviar requisição GET autenticada informando o ID de um cupom existente

**Resultado Esperado:**
- Retornar status 200
- Retornar os dados do cupom correspondente

---

### CT-011 — Criar cupom com sucesso (AUTOMATIZAR - API) caminho feliz

**Passos:**
1. Enviar requisição POST com os campos obrigatórios válidos

**Resultado Esperado:**
- Retornar status 201
- Cupom deve ser criado com sucesso

---

### CT-012 — Não permitir cadastro de cupom duplicado (AUTOMATIZAR - API) negativo

**Passos:**
1. Criar um cupom com sucesso
2. Tentar criar outro cupom com o mesmo código

**Resultado Esperado:**
- Sistema deve retornar erro
- Cupom não deve ser criado
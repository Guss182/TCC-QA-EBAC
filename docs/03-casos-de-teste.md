# Casos de Teste

---

## US001 — Adicionar item ao carrinho

### CT-001 — Adicionar item com sucesso (AUTOMATIZAR - UI) caminho feliz

**Pré-condição:** Produto disponível em estoque  

**Passos:**
1. Acessar a página do produto
2. Clicar em "Adicionar ao carrinho"

**Resultado Esperado:**
- Produto deve ser incluído no carrinho
- Subtotal deve ser atualizado corretamente

---

### CT-002 — Aplicar desconto de 10%

**Pré-condição:** Carrinho com valor entre R$ 200,00 e R$ 600,00  

**Passos:**
1. Adicionar produtos até atingir valor dentro da faixa
2. Verificar valor final

**Resultado Esperado:**
- Sistema aplica desconto automático de 10%

---

### CT-003 — Aplicar desconto de 15%

**Pré-condição:** Carrinho com valor acima de R$ 600,00  

**Passos:**
1. Adicionar produtos até ultrapassar R$ 600,00
2. Verificar valor final

**Resultado Esperado:**
- Sistema aplica desconto automático de 15%

---

### CT-004 — Limite máximo de 10 unidades (AUTOMATIZAR - UI) negativo (limite 10 unidades)

**Pré-condição:** Produto já adicionado 10 vezes  

**Passos:**
1. Tentar adicionar 11ª unidade

**Resultado Esperado:**
- Sistema impede ação
- Exibe mensagem de erro

---

### CT-005 — Limite máximo de R$ 990,00

**Pré-condição:** Carrinho próximo de R$ 990,00  

**Passos:**
1. Tentar adicionar produto que ultrapasse o limite

**Resultado Esperado:**
- Sistema impede ação
- Exibe mensagem informando limite máximo

---

## US002 — Login na plataforma

### CT-006 — Login com sucesso (AUTOMATIZAR - UI) caminho feliz

**Passos:**
1. Inserir login válido
2. Inserir senha válida
3. Clicar em entrar

**Resultado Esperado:**
- Usuário acessa a área logada

---

### CT-007 — Login inválido

**Passos:**
1. Inserir login ou senha incorretos
2. Clicar em entrar

**Resultado Esperado:**
- Sistema exibe mensagem de erro

---

### CT-008 — Bloqueio após 3 tentativas (AUTOMATIZAR - UI) alternativo/negativo (bloqueio)

**Passos:**
1. Inserir senha incorreta três vezes
2. Tentar logar novamente

**Resultado Esperado:**
- Sistema bloqueia login por 15 minutos

---

## US003 — API de Cupons

### CT-009 — Listar cupons (AUTOMATIZAR - API) GET

**Passos:**
1. Enviar requisição GET autenticada

**Resultado Esperado:**
- Retornar status 200
- Retornar lista de cupons

---

### CT-010 — Criar cupom com sucesso (AUTOMATIZAR - API) POST sucesso

**Passos:**
1. Enviar requisição POST com campos obrigatórios válidos

**Resultado Esperado:**
- Retornar status 201
- Cupom criado com sucesso

---

### CT-011 — Cupom duplicado (AUTOMATIZAR - API) duplicado (se der tempo, ótimo)

**Passos:**
1. Criar cupom
2. Tentar criar outro com mesmo nome

**Resultado Esperado:**
- Sistema retorna erro
- Cupom não é criado
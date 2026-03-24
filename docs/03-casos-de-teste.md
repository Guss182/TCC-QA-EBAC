# 03 - Casos de Teste

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

### CT-002 — Validar limite máximo de 10 unidades (AUTOMATIZAR - UI) negativo

**Pré-condição:** Produto disponível para compra

**Passos:**
1. Acessar a página do produto
2. Selecionar as opções do produto, se necessário
3. Informar quantidade superior a 10 unidades
4. Clicar em "Adicionar ao carrinho"

**Resultado Esperado:**
- Sistema deve impedir a ação ou apresentar mensagem relacionada à limitação de quantidade

---

### CT-003 — Aplicar desconto de 10% (AUTOMATIZAR - UI) regra de negócio

**Pré-condição:** Carrinho com valor entre R$ 200,00 e R$ 600,00

**Passos:**
1. Adicionar produtos até atingir valor dentro da faixa
2. Acessar o carrinho
3. Verificar o valor final da compra

**Resultado Esperado:**
- Sistema deve aplicar desconto de 10% sobre o valor total da compra

**Observação:**
- Este cenário foi mantido na automação com identificação `BUG:` no nome do teste.
- Durante a execução automatizada no ambiente disponibilizado pela EBAC, o desconto esperado não foi aplicado, evidenciando divergência entre a regra documentada e o comportamento real da aplicação.

---

### CT-004 — Aplicar desconto de 15% (AUTOMATIZAR - UI) regra de negócio

**Pré-condição:** Carrinho com valor acima de R$ 600,00

**Passos:**
1. Adicionar produtos até ultrapassar R$ 600,00
2. Acessar o carrinho
3. Verificar o valor final da compra

**Resultado Esperado:**
- Sistema deve aplicar desconto de 15% sobre o valor total da compra

**Observação:**
- Este cenário foi mantido na automação com identificação `BUG:` no nome do teste.
- Durante a execução automatizada no ambiente disponibilizado pela EBAC, o desconto esperado não foi aplicado, evidenciando divergência entre a regra documentada e o comportamento real da aplicação.

---

### CT-005 — Não permitir que o total do carrinho ultrapasse R$ 990,00 (AUTOMATIZAR - UI) regra de negócio

**Pré-condição:** Carrinho com quantidade de produtos suficiente para ultrapassar o valor máximo permitido

**Passos:**
1. Adicionar produtos ao carrinho até ultrapassar o valor de R$ 990,00
2. Acessar o carrinho
3. Verificar o valor final da compra

**Resultado Esperado:**
- O sistema não deve permitir que o valor total ultrapasse R$ 990,00

**Observação:**
- Este cenário foi mantido na automação com identificação `BUG:` no nome do teste.
- Durante a execução automatizada no ambiente disponibilizado pela EBAC, o valor total do carrinho ultrapassou R$ 990,00, evidenciando divergência entre a regra documentada e o comportamento real da aplicação.

---

## US002 — Login na plataforma

### CT-006 — Login com sucesso (AUTOMATIZAR - UI) caminho feliz

**Passos:**
1. Acessar a tela de login
2. Informar usuário válido
3. Informar senha válida
4. Clicar em entrar

**Resultado Esperado:**
- Usuário deve acessar a área logada

---

### CT-007 — Login com usuário ou senha inválidos (AUTOMATIZAR - UI) negativo

**Passos:**
1. Acessar a tela de login
2. Informar usuário ou senha incorretos
3. Clicar em entrar

**Resultado Esperado:**
- Sistema deve exibir mensagem de erro
- Usuário não deve acessar a área logada

---

### CT-008 — Não bloquear conta com menos de 3 tentativas inválidas (AUTOMATIZAR - UI) alternativo

**Passos:**
1. Acessar a tela de login
2. Informar usuário válido com senha incorreta por 2 vezes
3. Informar as credenciais corretas na tentativa seguinte
4. Clicar em entrar

**Resultado Esperado:**
- Sistema não deve bloquear a conta
- Deve permitir login com as credenciais corretas após menos de 3 tentativas inválidas

---

### CT-009 — Bloquear conta após 3 tentativas inválidas (AUTOMATIZAR - UI) negativo

**Passos:**
1. Acessar a tela de login
2. Informar usuário válido com senha incorreta por 3 vezes
3. Informar as credenciais corretas na tentativa seguinte
4. Clicar em entrar

**Resultado Esperado:**
- Sistema deve bloquear o login por 15 minutos
- Deve exibir mensagem informando o bloqueio temporário
- Usuário não deve acessar a área logada

**Observação:**
- Este cenário foi mantido na automação com identificação `BUG:` no nome do teste.
- Durante a execução da automação no ambiente disponibilizado pela EBAC, o comportamento de bloqueio após 3 tentativas inválidas não foi observado, sendo tratado como divergência entre a regra esperada e o comportamento real da aplicação no ambiente de testes.

---

### CT-010 — Login com usuário inexistente (AUTOMATIZAR - UI) negativo complementar

**Passos:**
1. Acessar a tela de login
2. Informar um usuário inexistente
3. Informar uma senha qualquer
4. Clicar em entrar

**Resultado Esperado:**
- Sistema deve exibir mensagem de erro
- Usuário não deve acessar a área logada

---

### CT-011 — Login com senha inválida para usuário válido (AUTOMATIZAR - UI) negativo complementar

**Passos:**
1. Acessar a tela de login
2. Informar um usuário válido
3. Informar uma senha incorreta
4. Clicar em entrar

**Resultado Esperado:**
- Sistema deve exibir mensagem de erro
- Usuário não deve acessar a área logada

---

## US003 — API de Cupons

### CT-012 — Listar cupons com sucesso (AUTOMATIZAR - API) caminho feliz

**Passos:**
1. Enviar requisição GET autenticada para listagem de cupons

**Resultado Esperado:**
- Retornar status 200
- Retornar lista de cupons

---

### CT-013 — Buscar cupom por ID (AUTOMATIZAR - API) caminho feliz

**Pré-condição:** Existir um cupom cadastrado

**Passos:**
1. Enviar requisição GET autenticada informando o ID de um cupom existente

**Resultado Esperado:**
- Retornar status 200
- Retornar os dados do cupom correspondente

---

### CT-014 — Criar cupom com sucesso (AUTOMATIZAR - API) caminho feliz

**Passos:**
1. Enviar requisição POST com os campos obrigatórios válidos

**Resultado Esperado:**
- Retornar status 201
- Cupom deve ser criado com sucesso

---

### CT-015 — Não permitir cadastro de cupom duplicado (AUTOMATIZAR - API) negativo

**Passos:**
1. Criar um cupom com sucesso
2. Tentar criar outro cupom com o mesmo código

**Resultado Esperado:**
- Sistema deve retornar erro
- Cupom não deve ser criado

---

## US004 — Catálogo de Produtos no aplicativo mobile

### CT-016 — Acessar a área de catálogo no app (AUTOMATIZAR - MOBILE) caminho feliz adaptado

**Pré-condição:** Aplicativo instalado e ambiente mobile configurado

**Passos:**
1. Abrir o aplicativo
2. Acessar a navegação principal
3. Tentar acessar a área de catálogo

**Resultado Esperado:**
- Aplicativo deve abrir corretamente
- Navegação principal deve estar funcional
- Usuário deve conseguir acessar a área de catálogo

---

### CT-017 — Exibir produtos no catálogo mobile (AUTOMATIZAR - MOBILE) caminho feliz adaptado

**Pré-condição:** Aplicativo aberto na área de catálogo

**Passos:**
1. Acessar a área de catálogo
2. Verificar a exibição de itens disponíveis

**Resultado Esperado:**
- Sistema deve exibir produtos disponíveis no catálogo
- A navegação da tela deve permanecer funcional

---

### CT-018 — Acessar detalhes de um produto no mobile (AUTOMATIZAR - MOBILE) caminho feliz adaptado

**Pré-condição:** Aplicativo aberto na área de catálogo com produtos visíveis

**Passos:**
1. Selecionar um produto exibido no catálogo
2. Tentar acessar sua tela de detalhes

**Resultado Esperado:**
- Sistema deve permitir a tentativa de acesso aos detalhes do produto
- A navegação deve continuar estável durante o fluxo

---

### CT-019 — Manter navegação funcional no catálogo mobile em ambiente instável (AUTOMATIZAR - MOBILE) alternativo adaptado

**Pré-condição:** Aplicativo aberto no ambiente de testes mobile

**Passos:**
1. Abrir o aplicativo
2. Navegar até a área de catálogo
3. Interagir com elementos principais disponíveis na navegação

**Resultado Esperado:**
- Aplicativo deve manter a navegação funcional
- A automação deve registrar o comportamento observado
- O fluxo principal deve permanecer validável mesmo em cenário de instabilidade do app
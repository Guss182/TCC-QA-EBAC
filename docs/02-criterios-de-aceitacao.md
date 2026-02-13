# Critérios de Aceitação

---

## US001 — Adicionar item ao carrinho

### Cenário 1 — Adicionar item com sucesso
Dado que o usuário está na página de produto  
Quando adicionar um item ao carrinho  
Então o sistema deve incluir o item no carrinho  
E o subtotal deve ser atualizado corretamente  

---

### Cenário 2 — Aplicação de cupom 10%
Dado que o valor total esteja entre R$ 200,00 e R$ 600,00  
Quando o carrinho for atualizado  
Então deve ser aplicado automaticamente desconto de 10%  

---

### Cenário 3 — Aplicação de cupom 15%
Dado que o valor total seja acima de R$ 600,00  
Quando o carrinho for atualizado  
Então deve ser aplicado automaticamente desconto de 15%  

---

### Cenário 4 — Limite de 10 unidades
Dado que o usuário já adicionou 10 unidades do mesmo produto  
Quando tentar adicionar mais uma unidade  
Então o sistema deve impedir a ação  
E deve exibir mensagem informando limite máximo  

---

### Cenário 5 — Limite de valor máximo
Dado que o valor total ultrapasse R$ 990,00  
Quando tentar adicionar novo produto  
Então o sistema deve impedir a operação  
E exibir mensagem informando limite máximo permitido  

---

## US002 — Login na plataforma

### Cenário 1 — Login válido
Dado que o usuário esteja ativo  
Quando informar login e senha corretos  
Então o sistema deve permitir o acesso  

---

### Cenário 2 — Login inválido
Quando o usuário informar login ou senha incorretos  
Então o sistema deve exibir mensagem de erro  

---

### Cenário 3 — Bloqueio por tentativas inválidas
Dado que o usuário erre a senha 3 vezes  
Então o sistema deve bloquear o login por 15 minutos  

---

## US003 — API de Cupons

### Cenário 1 — Listar cupons
Dado que o admin esteja autenticado  
Quando realizar requisição GET  
Então o sistema deve retornar lista de cupons  

---

### Cenário 2 — Buscar cupom por ID
Dado que exista um cupom cadastrado  
Quando realizar requisição GET por ID  
Então o sistema deve retornar os dados do cupom  

---

### Cenário 3 — Criar cupom com sucesso
Dado que os campos obrigatórios estejam preenchidos  
Quando realizar requisição POST  
Então o sistema deve cadastrar o cupom  

---

### Cenário 4 — Cupom duplicado
Dado que já exista um cupom com o mesmo nome  
Quando tentar cadastrar novo cupom  
Então o sistema deve impedir o cadastro  
E retornar erro apropriado  
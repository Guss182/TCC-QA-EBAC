# Critérios de Aceitação

---

## US001 — Adicionar item ao carrinho

### Cenário 1 — Adicionar item com sucesso
Dado que o usuário está na página de produto  
Quando selecionar as opções do produto e adicionar um item ao carrinho  
Então o sistema deve incluir o item no carrinho  
E o subtotal deve ser atualizado corretamente  

---

### Cenário 2 — Limite máximo de 10 unidades
Dado que o usuário já adicionou 10 unidades do mesmo produto ao carrinho  
Quando tentar adicionar mais uma unidade  
Então o sistema deve impedir a ação  
E deve exibir mensagem informando limite máximo de unidades  

---

### Cenário 3 — Aplicação de desconto de 10%
Dado que o valor total do carrinho esteja entre R$ 200,00 e R$ 600,00  
Quando o carrinho for atualizado  
Então o sistema deve aplicar desconto de 10%  

---

### Cenário 4 — Aplicação de desconto de 15%
Dado que o valor total do carrinho seja acima de R$ 600,00  
Quando o carrinho for atualizado  
Então o sistema deve aplicar desconto de 15%  

---

## US002 — Login na plataforma

### Cenário 1 — Login com sucesso
Dado que o usuário esteja na tela de login  
Quando informar usuário e senha válidos  
Então o sistema deve permitir o acesso à área logada  

---

### Cenário 2 — Login com credenciais inválidas
Dado que o usuário esteja na tela de login  
Quando informar usuário ou senha incorretos  
Então o sistema deve exibir mensagem de erro  

---

### Cenário 3 — Não bloquear com menos de 3 tentativas inválidas
Dado que o usuário errou a senha 2 vezes consecutivas  
Quando tentar realizar uma nova tentativa de login  
Então o sistema deve permitir nova tentativa de login 

---

### Cenário 4 — Bloqueio após 3 tentativas inválidas
Dado que o usuário errou a senha 3 vezes consecutivas  
Quando tentar realizar novo login  
Então o sistema deve bloquear o acesso por 15 minutos  

---

## US003 — API de Cupons

### Cenário 1 — Listar cupons com sucesso
Dado que o administrador esteja autenticado  
Quando realizar uma requisição GET para listar cupons  
Então o sistema deve retornar a lista de cupons cadastrados  

---

### Cenário 2 — Buscar cupom por ID
Dado que exista um cupom cadastrado  
E que o administrador esteja autenticado  
Quando realizar uma requisição GET informando o ID do cupom  
Então o sistema deve retornar os dados do cupom correspondente  

---

### Cenário 3 — Criar cupom com sucesso
Dado que o administrador esteja autenticado  
E que os campos obrigatórios estejam preenchidos corretamente  
Quando realizar uma requisição POST para cadastrar cupom  
Então o sistema deve cadastrar o cupom com sucesso  

---

### Cenário 4 — Impedir cadastro de cupom duplicado
Dado que já exista um cupom cadastrado com o mesmo código  
Quando tentar cadastrar um novo cupom com o mesmo código 
Então o sistema deve impedir o cadastro  
E deve retornar erro apropriado  
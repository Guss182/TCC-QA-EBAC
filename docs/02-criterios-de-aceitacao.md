# 02 - Critérios de Aceitação

---

## US001 — Adicionar item ao carrinho

### Cenário 1 — Adicionar item com sucesso
Dado que o usuário esteja na página de produto  
Quando selecionar as opções do produto e adicionar um item ao carrinho  
Então o sistema deve incluir o item no carrinho  
E o subtotal deve ser atualizado corretamente  

---

### Cenário 2 — Limite máximo de 10 unidades
Dado que o usuário já tenha adicionado 10 unidades do mesmo produto ao carrinho  
Quando tentar adicionar mais uma unidade  
Então o sistema deve impedir a ação  
E deve exibir mensagem informando o limite máximo de unidades  

---

### Cenário 3 — Aplicação de desconto de 10%
Dado que o valor total do carrinho esteja entre R$ 200,00 e R$ 600,00  
Quando o carrinho for atualizado  
Então o sistema deve aplicar desconto de 10% sobre o valor total da compra  

**Observação:**  
Este critério foi mantido no projeto como regra esperada. Durante a execução automatizada, o comportamento correspondente apresentou divergência no ambiente disponibilizado para testes.

---

### Cenário 4 — Aplicação de desconto de 15%
Dado que o valor total do carrinho seja superior a R$ 600,00  
Quando o carrinho for atualizado  
Então o sistema deve aplicar desconto de 15% sobre o valor total da compra  

**Observação:**  
Este critério foi mantido no projeto como regra esperada. Durante a execução automatizada, o comportamento correspondente apresentou divergência no ambiente disponibilizado para testes.

---

### Cenário 5 — Impedir valor total acima de R$ 990,00
Dado que o carrinho já possua produtos suficientes para atingir o limite máximo permitido  
Quando o usuário tentar ultrapassar o valor total de R$ 990,00  
Então o sistema não deve permitir a continuidade da regra  
E deve respeitar o limite máximo definido para o carrinho  

**Observação:**  
Este critério foi mantido no projeto como regra esperada. Durante a execução automatizada, o comportamento correspondente apresentou divergência no ambiente disponibilizado para testes.

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
E não deve permitir o acesso à área logada  

---

### Cenário 3 — Não bloquear com menos de 3 tentativas inválidas
Dado que o usuário tenha informado senha incorreta em 2 tentativas consecutivas  
Quando tentar realizar uma nova tentativa de login com as credenciais corretas  
Então o sistema não deve bloquear a conta  
E deve permitir o acesso normalmente  

---

### Cenário 4 — Bloqueio após 3 tentativas inválidas
Dado que o usuário tenha informado senha incorreta em 3 tentativas consecutivas  
Quando tentar realizar novo login  
Então o sistema deve bloquear o acesso por 15 minutos  
E deve exibir mensagem informando o bloqueio temporário  

**Observação:**  
Este critério foi mantido no projeto como regra esperada. Durante a execução automatizada, o comportamento correspondente apresentou divergência no ambiente disponibilizado para testes.

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

---

## US004 — Catálogo de Produtos no aplicativo mobile

### Cenário 1 — Acessar a área de catálogo no aplicativo
Dado que o aplicativo esteja instalado e o ambiente mobile esteja configurado  
Quando o usuário abrir o aplicativo e navegar até a área de catálogo  
Então o sistema deve permitir o acesso à área de catálogo  

---

### Cenário 2 — Exibir produtos disponíveis no catálogo
Dado que o usuário esteja na área de catálogo  
Quando visualizar os itens disponíveis  
Então o sistema deve exibir produtos aptos para navegação  
E a tela deve permanecer funcional durante a interação  

---

### Cenário 3 — Tentar acessar detalhes de um produto
Dado que existam produtos visíveis no catálogo  
Quando o usuário selecionar um produto  
Então o sistema deve permitir a tentativa de acesso à tela de detalhes  
E a navegação deve permanecer estável dentro das condições disponíveis no aplicativo  

---

### Cenário 4 — Manter navegação funcional em ambiente instável
Dado que o aplicativo apresente instabilidade no ambiente disponibilizado para testes  
Quando o usuário executar o fluxo principal de navegação  
Então a automação deve validar os pontos principais possíveis  
E deve registrar o comportamento observado de forma controlada
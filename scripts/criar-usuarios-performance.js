const fs = require('fs')
const path = require('path')

const BASE_URL = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3'
const CONSUMER_KEY = 'admin_ebac'
const CONSUMER_SECRET = '@admin!&b@c!2022'

const QUANTIDADE_USUARIOS = 5
const SENHA_PADRAO = 'Teste@123456'

function gerarUsuario(indice) {
  const timestamp = Date.now()

  return {
    email: `performance_${timestamp}_${indice}@teste.com`,
    first_name: 'Usuario',
    last_name: `Performance${indice}`,
    username: `perf_user_${timestamp}_${indice}`,
    password: SENHA_PADRAO
  }
}

function gerarAuthHeader() {
  const credentials = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64')
  return `Basic ${credentials}`
}

async function criarUsuario(usuario) {
  const response = await fetch(`${BASE_URL}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: gerarAuthHeader()
    },
    body: JSON.stringify(usuario)
  })

  const data = await response.json()

  return {
    status: response.status,
    data
  }
}

async function main() {
  const usuariosCriados = []

  for (let i = 1; i <= QUANTIDADE_USUARIOS; i++) {
    const usuario = gerarUsuario(i)

    console.log(`Criando usuário ${i}...`)

    const resultado = await criarUsuario(usuario)

    if (resultado.status === 201 || resultado.status === 200) {
      console.log('Usuário criado com sucesso:')
      console.log(`- id: ${resultado.data.id}`)
      console.log(`- username: ${resultado.data.username}`)
      console.log(`- email: ${resultado.data.email}`)
      console.log(`- password: ${SENHA_PADRAO}`)
      console.log('-----------------------------------')

      usuariosCriados.push({
        username: resultado.data.username,
        password: SENHA_PADRAO,
        email: resultado.data.email,
        id: resultado.data.id
      })
    } else {
      console.log('Erro ao criar usuário:')
      console.log(resultado.data)
      console.log('-----------------------------------')
    }
  }

  const pastaEvidencias = path.resolve(__dirname, '../docs/evidencias/performance')
  const arquivoSaida = path.join(pastaEvidencias, 'usuarios-performance.json')

  if (!fs.existsSync(pastaEvidencias)) {
    fs.mkdirSync(pastaEvidencias, { recursive: true })
  }

  fs.writeFileSync(arquivoSaida, JSON.stringify(usuariosCriados, null, 2), 'utf-8')

  console.log('Resumo final:')
  console.log(JSON.stringify(usuariosCriados, null, 2))
  console.log(`Arquivo de evidência salvo em: ${arquivoSaida}`)
}

main().catch((error) => {
  console.error('Erro ao executar script:', error)
})
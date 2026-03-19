import http from 'k6/http'
import { check, sleep } from 'k6'
import exec from 'k6/execution'

const BASE_URL = __ENV.BASE_URL || 'http://lojaebac.ebaconline.art.br'

const usuarios = [
  { username: 'perf_user_1773930623152_1', password: 'Teste@123456' },
  { username: 'perf_user_1773930624214_2', password: 'Teste@123456' },
  { username: 'perf_user_1773930625185_3', password: 'Teste@123456' },
  { username: 'perf_user_1773930626042_4', password: 'Teste@123456' },
  { username: 'perf_user_1773930626914_5', password: 'Teste@123456' }
]

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m40s', target: 20 },
    { duration: '0s', target: 0 }
  ]
}

function obterUsuario() {
  const indice = (exec.vu.idInTest - 1) % usuarios.length
  return usuarios[indice]
}

function extrairNonce(html) {
  const match = html.match(/name="woocommerce-login-nonce"\s+value="([^"]+)"/)
  return match ? match[1] : null
}

function loginComSucesso(response) {
  return (
    response.body.includes('Pedidos') ||
    response.body.includes('Minha conta') ||
    response.body.includes('Sair') ||
    response.body.includes('Logout')
  )
}

function loginComErro(response) {
  return (
    response.body.includes('A senha fornecida') ||
    response.body.includes('Endereço de e-mail desconhecido') ||
    response.body.includes('Nome de usuário desconhecido') ||
    response.body.includes('está incorreta') ||
    response.body.includes('perdeu a senha')
  )
}

export default function () {
  const usuario = obterUsuario()

  const paginaLogin = http.get(`${BASE_URL}/minha-conta/`)
  const nonce = extrairNonce(paginaLogin.body)

  check(paginaLogin, {
    'pagina de login retornou 200': (r) => r.status === 200,
    'nonce encontrado': () => nonce !== null
  })

  const payload = {
    username: usuario.username,
    password: usuario.password,
    login: 'Acessar',
    'woocommerce-login-nonce': nonce,
    '_wp_http_referer': '/minha-conta/'
  }

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const response = http.post(`${BASE_URL}/minha-conta/`, payload, params)

  check(response, {
    'login respondeu 200': (r) => r.status === 200,
    'login aparenta sucesso': (r) => loginComSucesso(r),
    'login sem erro real': (r) => !loginComErro(r)
  })

  sleep(1)
}
const request = require('supertest')
const { expect } = require('chai')
const { schemaCupom, schemaListaCupons } = require('../contracts/cupom.contract')

const baseURL = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3'
const consumerKey = 'admin_ebac'
const consumerSecret = '@admin!&b@c!2022'

function api(method, endpoint) {
  return request(baseURL)[method](endpoint).auth(consumerKey, consumerSecret)
}

function validarContrato(schema, body) {
  const { error } = schema.validate(body)

  expect(
    error,
    error ? `Contrato inválido: ${error.message}` : ''
  ).to.equal(undefined)
}

describe('US003 - API de Cupons', () => {
  let cupom

  beforeEach(() => {
    cupom = {
      code: `cupom-tcc-${Date.now()}`,
      amount: '10',
      discount_type: 'fixed_product',
      description: 'Cupom criado via automacao'
    }
  })

  it('CT-009 - Deve listar cupons com sucesso', async () => {
    const response = await api('get', '/coupons')

    expect(response.status).to.equal(200)
    expect(response.body).to.be.an('array')

    validarContrato(schemaListaCupons, response.body)
  })

  it('CT-010 - Deve buscar cupom por ID com sucesso', async () => {
    const listaResponse = await api('get', '/coupons')

    expect(listaResponse.status).to.equal(200)
    expect(listaResponse.body).to.be.an('array')
    expect(listaResponse.body.length).to.be.greaterThan(0)

    const cupomId = listaResponse.body[0].id

    const response = await api('get', `/coupons/${cupomId}`)

    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('id', cupomId)

    validarContrato(schemaCupom, response.body)
  })

  it('CT-011 - Deve criar cupom com sucesso', async () => {
    const response = await api('post', '/coupons')
      .send(cupom)

    expect(response.status).to.equal(201)
    expect(response.body).to.have.property('id')
    expect(response.body).to.have.property('code', cupom.code)
    expect(response.body).to.have.property('amount', '10.00')
    expect(response.body).to.have.property('discount_type', cupom.discount_type)

    validarContrato(schemaCupom, response.body)
  })

  it('CT-012 - Não deve permitir cadastro de cupom duplicado', async () => {
    const primeiroResponse = await api('post', '/coupons')
      .send(cupom)

    expect(primeiroResponse.status).to.equal(201)

    const segundoResponse = await api('post', '/coupons')
      .send(cupom)

    expect(segundoResponse.status).to.equal(400)
  })
})
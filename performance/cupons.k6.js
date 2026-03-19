import http from 'k6/http'
import { check, sleep } from 'k6'
import encoding from 'k6/encoding'

const BASE_URL = __ENV.BASE_URL || 'http://lojaebac.ebaconline.art.br'
const CONSUMER_KEY = __ENV.CONSUMER_KEY || 'admin_ebac'
const CONSUMER_SECRET = __ENV.CONSUMER_SECRET || '@admin!&b@c!2022'

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m40s', target: 20 },
    { duration: '0s', target: 0 }
  ]
}

function getAuthHeaders() {
  const credentials = `${CONSUMER_KEY}:${CONSUMER_SECRET}`
  const encodedCredentials = encoding.b64encode(credentials)

  return {
    headers: {
      Authorization: `Basic ${encodedCredentials}`
    }
  }
}

export default function () {
  const response = http.get(
    `${BASE_URL}/wp-json/wc/v3/coupons`,
    getAuthHeaders()
  )

  check(response, {
    'status deve ser 200': (r) => r.status === 200,
    'tempo de resposta menor que 2s': (r) => r.timings.duration < 2000,
    'resposta deve ser uma lista': (r) => {
      try {
        const body = JSON.parse(r.body)
        return Array.isArray(body)
      } catch (error) {
        return false
      }
    }
  })

  sleep(1)
}
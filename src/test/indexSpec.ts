import supertest from 'supertest'
import app from '../index'

const request: supertest.SuperTest<supertest.Test> = supertest(app)

describe('Test endpoints responses', (): void => {
  describe('endpoint: /api', (): void => {
    it('gets /api', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api')

      expect(response.status).toBe(200)
    })
  })

  describe('endpoint: /api/image', (): void => {
    it('gets /api/image?filename=fjord (valid args)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/image?filename=fjord'
      )

      expect(response.status).toBe(200)
    })

    it('gets /api/image?filename=fjord&width=200&height=200 (valid querys parameters)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/image?filename=fjord&width=200&height=200'
      )

      expect(response.status).toBe(200)
    })

    it('gets /api/image?filename=fjord&width=-200&height=200 (Invalid querys parameters)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/image?filename=fjord&width=200&height=-200'
      )

      expect(response.status).toBe(200)
    })
  })

  describe('endpoint: /api/thumb', (): void => {
    it('returns 404 for invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/thumb')

      expect(response.status).toBe(404)
    })
  })
})

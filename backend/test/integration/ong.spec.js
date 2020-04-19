const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD2",
      email: "contato@gmail.com",
      whatsapp: "470000000",
      city: "São paulo",
      uf: "SP"
    });
  })
}); 
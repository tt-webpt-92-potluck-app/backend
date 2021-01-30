const request = require('supertest');

const server = require('./server');

it('should set DB environment to testing', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

describe('server', () => {
  describe('GET /', () => {
    it('should return status code 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should return JSON formatted data', async () => {
      const res = await request(server).get('/');
      expect(res.type).toMatch(/json/i);
    });

    it('should return message property with server up and running as the value in the response body', async () => {
      const res = await request(server).get('/');
      expect(res.body.message).toBe('server up and running');
    })
  })
})

import request from 'supertest';
import app from '../src';

describe('App', () => {
  let server: any;

  beforeEach(async () => {
    server = await app.listen(4040);
  });

  afterEach((done) => server && server.close(done));

  it('should start correctly', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .then((res) => {
        expect(res.body).toMatch(/is working/);
      });
  });
});

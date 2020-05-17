import request from 'supertest';
import app from '../../src';

describe('Blog', () => {
  let server: any;

  beforeEach(async () => {
    server = await app.listen(4001);
  });

  afterEach((done) => server && server.close(done));

  it('should have a main route', async () => {
    await request(app)
      .get('/blog')
      .expect(200);
  });
});

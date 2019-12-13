const test = require('tape');
const request = require('supertest');

const app = require('../server');

test('get /', t => {
  request(app)
    .get('/')
    .expect(200)
    .end(err => {
      const msg = 'should return 200 OK';
      if (err) return t.fail(msg);
      t.pass(msg);
      t.end();
    });
});

test('get /upload', t => {
  request(app)
    .post('/upload')
    .expect(400)
    .end(err => {
      const msg = 'should return 400 bad request(whitout file)';
      if (err) return t.fail(msg);
      t.pass(msg);
      t.end();
    });
});

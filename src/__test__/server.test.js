/* eslint-disable no-undef */
const request = require('supertest');

const unitServer = require('../server/unitServer');
// unit testing server functionality
describe('test get request of of express server ', () => {
  test('should respond with test numbers array', async () => {
    const response = await request(unitServer).get('/projectData');
    expect(response.body).toEqual([64, 54, 32, 82]);
    expect(response.statusCode).toBe(200);
  });
});

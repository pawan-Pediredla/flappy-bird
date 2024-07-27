
const axios = require('axios');
const nock = require('nock');

describe('API Endpoints', () => {
  beforeEach(() => {
    nock('https://api.example.com')
      .get('/data')
      .reply(200, { key: 'value' });
  });

  test('should fetch data from API', async () => {
    const response = await axios.get('https://api.example.com/data');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('key');
  });
});

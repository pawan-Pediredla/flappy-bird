const axios = require('axios');

describe('API Endpoints', () => {
  test('should fetch data from API', async () => {
    const response = await axios.get('https://api.example.com/data');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('key');
  });
});

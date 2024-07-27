
const { sum } = require('../../src/utils'); // Adjust the import path as needed

describe('Utility Functions', () => {
  test('should correctly sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// __tests__/sum.test.js
const sum = require('../src/sum');

test('suma 1 + 2 debe ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});

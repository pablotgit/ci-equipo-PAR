const suma = require('../src/suma');

test('2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(5);
});
const multiplicacion = require('../src/multiplicacion');

test('2 * 3 = 6', () => {
  expect(multiplicacion(2, 3)).toBe(6);
});
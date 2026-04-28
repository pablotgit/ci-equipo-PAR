const division = require('../src/division');

test('6 / 2 = 3', () => {
  expect(division(6, 2)).toBe(3);
});

test('5 / 0 returns error message', () => {
  expect(division(5, 0)).toBe('Error: División por cero');
});

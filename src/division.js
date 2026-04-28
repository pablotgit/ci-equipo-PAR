function division(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

module.exports = division;

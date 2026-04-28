const readline = require('readline');
const suma = require('./suma');
const resta = require('./resta');
const multiplicacion = require('./multiplicacion');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar primer número
rl.question('Ingresá el primer número: ', (input1) => {
  const num1 = Number(input1);

  if (isNaN(num1)) {
    console.log('❌ El primer valor no es un número válido');
    rl.close();
    return;
  }

  // Preguntar segundo número
  rl.question('Ingresá el segundo número: ', (input2) => {
    const num2 = Number(input2);

    if (isNaN(num2)) {
      console.log('❌ El segundo valor no es un número válido');
      rl.close();
      return;
    }

    // Operaciones
    console.log(`Suma ${num1} + ${num2} =`, suma(num1, num2));
    console.log(`Resta ${num1} - ${num2} =`, resta(num1, num2));
    console.log(`Multiplicación ${num1} * ${num2} =`, multiplicacion(num1, num2));

    rl.close();
  });
});
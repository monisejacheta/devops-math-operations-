function somarNumeros(a, b) {
    return a + b;
}

function subtrairNumeros(a, b) {
  return a - b;
}

function multiplicarNumeros(a, b) {
  return a * b;
}

function dividirNumeros(a, b) {
  if (b === 0) {
    throw new Error("A divisão não pode ser realizada por zero.");
  }
  return a / b;
}

module.exports = { somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros };


const { somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros } = require("../math");

test("A soma de 2 + 3 deve ser 5", () => {
  expect(somarNumeros(2, 3)).toBe(5);
});

test("A subtração de 11 - 4 deve ser 7", () => {
  expect(subtrairNumeros(11, 4)).toBe(7);
});

test("A multiplicação de 3 * 9 deve ser 27", () => {
  expect(multiplicarNumeros(3, 9)).toBe(27);
});

test("A divisão de 20 / 4 deve ser 5", () => {
  expect(dividirNumeros(20, 4)).toBe(5);
});

test("A divisão por zero deve lançar erro", () => {
  expect(() => dividirNumeros(10, 0)).toThrow("A divisão não pode ser realizada por zero");
});
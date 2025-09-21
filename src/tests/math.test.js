

const { soma, subtracao, multiplicacao, divisao } = require("../math");

test("A soma de 2 + 3 deve ser 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("A subtração de 11 - 4 deve ser 7", () => {
  expect(subtracao(11, 4)).toBe(7);
});

test("A multiplicação de 3 * 9 deve ser 27", () => {
  expect(multiplicacao(3, 9)).toBe(27);
});

test("A divisão de 20 / 4 deve ser 5", () => {
  expect(divisao(20, 4)).toBe(5);
});

test("A divisão por zero deve lançar erro", () => {
  expect(() => divisao(10, 0)).toThrow("Divisão por zero não permitida");
});
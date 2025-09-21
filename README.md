# devops-math-operations
Atividade para aula DevOps e Integração Contínua (CI) utilizando o GitHub Actions.

Projeto simples de operações matemáticas básicas em JavaScript, com foco em boas práticas de desenvolvimento, testes automatizados e integração contínua.

## Funcionalidades

- Soma de dois números
- Subtração de dois números
- Multiplicação de dois números
- Divisão de dois números (com tratamento para divisão por zero)

## Estrutura do Projeto

```
src/
  math.js           # Funções matemáticas
  tests/
    math.test.js    # Testes automatizados com Jest
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/devops-math-operations.git
   cd devops-math-operations
   ```

2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

## Executando os Testes

Os testes automatizados são escritos com [Jest](https://jestjs.io/).

```sh
npm test
# ou
yarn test
```

## Exemplo de Uso

```javascript
const { somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros } = require('./src/math');

console.log(somarNumeros(2, 3)); // 5
console.log(subtrairNumeros(11, 4)); // 7
console.log(multiplicarNumeros(3, 9)); // 27
console.log(dividirNumeros(20, 4)); // 5
```


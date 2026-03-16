const numeros = [5, 7, 12, 34, 56, 78, 90, 45, 23, 67, 89, 43];

const somaDoDobroDeTodosOsPares = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 2)
    .reduce((acumulador, numero) => acumulador + numero, 0);

console.log(somaDoDobroDeTodosOsPares);
const numeros = [5, 12, 66, 70, 23, 56, 89, 34, 90, 45, 27, 18];

const numerosEmDobro = numeros.map(numero => numero * 2);
// console.log(numerosEmDobro);

const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 },
  { nome: 'Ana', idade: 35 },
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

const idades = pessoas.map(pessoas => ({ idade: pessoas.idade }));
console.log(idades);

const comIds = pessoas.map((pessoa, indice) => ({ id: indice + 1, ...pessoa }));
console.log(comIds);

console.log(pessoas);
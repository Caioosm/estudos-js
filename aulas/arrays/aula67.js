const numeros = [6, 5, 23, 45, 67, 12, 34, 89, 90, 56, 78, 43];

const numerosDobro = numeros.map(numero => numero * 2);
// console.log(numerosDobro);

const numerosPares = numeros.filter(numero => numero %2 === 0);
// console.log(numerosPares);

const somatorio = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(somatorio);


const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 },
  { nome: 'Ana', idade: 35 },
];

const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) => {
  return (pessoa.idade > maisVelha.idade) ? pessoa : maisVelha;
}, pessoas[0]);

console.log(pessoaMaisVelha);
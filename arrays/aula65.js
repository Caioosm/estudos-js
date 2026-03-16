//filter -> sempre retorna um array com a mesma quantidade ou menos elementos do array original
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numeros.filter(numero => numero > 5);



const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 },
  { nome: 'Ana', idade: 35 },
];

const pessoasFiltradasIdade = pessoas.filter(pessoa => pessoa.idade > 25);
const pessoasFiltradasNome = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasFiltradasLetra = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));

// console.log(numerosFiltrados);
console.log("================================");
console.log(pessoasFiltradasIdade);
console.log("================================");
console.log(pessoasFiltradasNome);
console.log("================================");
console.log(pessoasFiltradasLetra);

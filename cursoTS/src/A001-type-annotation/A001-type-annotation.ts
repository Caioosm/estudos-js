//tipos basicos
let nome: string = 'nome';
let idade: number = 20;
let adulto: boolean = true;
let symbol: symbol = Symbol('sla algum simbolo ai');

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5, 6];

let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos

let pessoas: {
  nome: string,
  idade: number,
  adulto?: boolean
} = {
  nome: 'sla',
  idade: 30
}

// Funcoes
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

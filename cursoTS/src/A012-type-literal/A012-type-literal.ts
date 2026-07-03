let x = 10;
x = 0b1010;

let a = 100 as const;
const y = 10;

const person = {
  name: 'luiz' as const,
  lastname: 'miranda'
};

function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Amarelo') {
  return cor;
}

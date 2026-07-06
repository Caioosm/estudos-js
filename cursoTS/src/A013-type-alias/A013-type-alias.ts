type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'sla',
  idade: 30,
  salario: 1300,
};

export function setCorPreferida(pessoa: Pessoa, corPreferida: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: corPreferida }
}

console.log(setCorPreferida(pessoa, 'Preto'));

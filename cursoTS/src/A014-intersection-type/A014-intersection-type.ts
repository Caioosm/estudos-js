type TemNome = {nome: string};
type TemSobreNome = {sobreNome: string};
type TemIdade = {idade: number};
// type Pessoa = TemNome | TemSobreNome | TemIdade;
type Pessoa = TemNome & TemSobreNome & TemIdade;

const pessoa: Pessoa = {
  nome: 'teste',
  sobreNome: 'sla',
  idade: 20
};



export { pessoa }

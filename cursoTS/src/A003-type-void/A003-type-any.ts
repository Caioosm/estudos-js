function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'nao',
  sobrenome: 'sei',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

pessoa.exibirNome();

semRetorno('nao', 'sei');

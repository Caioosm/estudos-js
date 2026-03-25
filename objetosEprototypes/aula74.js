function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa('Luiz', 'Otávio');
Pessoa.prototype.teste = 'Teste';

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome} - alterado`;
}
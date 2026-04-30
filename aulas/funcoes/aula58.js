// FUncao construtura -> objetos
// Função fabrica -> objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
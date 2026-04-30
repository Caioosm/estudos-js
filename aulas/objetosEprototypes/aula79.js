const nomeCompleto = {
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
};


const pessoaPrototype = Object.assign({}, nomeCompleto);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome, enumerable: true },
        sobrenome: { value: sobrenome, enumerable: true }
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto()); // Output: Luiz Otávio
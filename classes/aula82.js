class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(nomeCompleto){
        const partes = nomeCompleto.split(' ');
        this.nome = partes[0];
        this.sobrenome = partes[1];
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
p1.nomeCompleto = 'Maria Silva';
console.log(p1.nomeCompleto);
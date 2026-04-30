// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Silva'
// }


// const pessoa2 = new Object();
// pessoa2.nome = 'Maria';
// pessoa2.idade = 30;

// pessoa2.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// // console.log(pessoa2.getDataNascimento());

// for(let chave in pessoa2){
//     console.log(chave, pessoa2[chave]);
// }



function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('João', 'Silva');
console.log(p1.nomeCompleto());
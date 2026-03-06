//factory function - função fábrica
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        altura,
        peso,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 80, 1.80);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Maria Oliveira';
console.log(p1.nomeCompleto);

console.log(p1.imc);
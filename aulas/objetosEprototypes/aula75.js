// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'a'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'b',
//     // __proto__: Object.prototype
// }

// Object.setPrototypeOf(objB, objA); // objB herda de objA

// console.log(objB.chaveA);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(20);
// console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    nome: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Caneca'
    }
})

p3.desconto(10);
console.log(p3);
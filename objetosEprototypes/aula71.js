function produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: function(){
            return estoque;
        },
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    });
}

const p1 = new produto('Camiseta', 20, 3);
console.log(p1.estoque());


function produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Valor inválido');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new produto('Camiseta', 20, 3);
p1.estoque = 10;
// console.log(p1.estoque);

function criaProduto(nome) {
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Bermuda';
console.log(p2.nome);


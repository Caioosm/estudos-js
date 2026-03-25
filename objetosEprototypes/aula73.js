const produto =  { nome: 'Caneca', preco: 19.90, material: 'Porcelana' };
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

// const caneca = {
//     ...produto,
//     material: 'Porcelana'
// }

// console.log(produto);
// console.log(caneca);


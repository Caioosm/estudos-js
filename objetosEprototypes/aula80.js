const pessoas = [
    {id: 3, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Pedro'}
]


// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

// console.log(novasPessoas);

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    novasPessoas.set(pessoa.id, {...pessoa});
}

console.log(novasPessoas);

const path = require('path');
const filePath = path.resolve(__dirname, '..','teste.json');
const write = require('./modules/write');
const read = require('./modules/read');

// const pessoas = [
//     {
//         nome: 'João',
//     },
//     {
//         nome: 'Maria',
//     },
//     {
//         nome: 'José',
//     },
//     {
//         nome: 'Ana',
//     }
// ];
// const json = JSON.stringify(pessoas, '', 2);

// write(filePath, json);

async function readFile(pathFile) {
    const data = await read(pathFile);
    dataRender(data);
}

function dataRender(data) {
    const pessoas = JSON.parse(data);
    pessoas.forEach((pessoa) => {
        console.log(pessoa.nome);
    });
}

readFile(filePath);
const { texto } = require('./base')
// g - global (encontra todas as ocorrencias)
// i - insensitive
// () - grupos
// | ou
const expReg = /João/i;
const found = expReg.exec(texto);

console.log(found[0]);
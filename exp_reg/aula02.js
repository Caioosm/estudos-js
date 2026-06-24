const { texto } = require('./base')

const expReg = /João/gi;
console.log(texto.match(expReg));
console.log(texto.replace(/João/gi, function(input) {
    return input.toUpperCase();
}));
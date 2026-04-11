function numeroAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
    return new Promise( (resolve, reject) => {
        if (typeof msg !== 'string') reject('ERRO: O valor deve ser uma string');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', numeroAleatorio(1, 3))
    .then( mensagem => {
        console.log(mensagem);
        return esperaAi('Frase 2', numeroAleatorio(1, 3));
    }).then( mensagem => {
        console.log(mensagem);
        return esperaAi('Frase 3', numeroAleatorio(1, 3));
    }).then( mensagem => {
        console.log(mensagem);
    })
    .catch(erro => {
        return mensagemError('ERRO:', erro);
    });
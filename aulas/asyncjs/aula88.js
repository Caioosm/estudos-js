function rand(min, max){
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

// const promises = [
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ];

// Promise.race(promises)
//     .then( (valor) => {
//         console.log(valor);
//     })
//     .catch( (erro) => {
//         console.log(erro);
//     });


function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then( (resposta) => {
        console.log(resposta);
    })
    .catch( (erro) => {
        console.log(erro);
    });
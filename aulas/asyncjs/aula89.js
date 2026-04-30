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

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand(0, 3));
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(erro => {
//         console.log(erro);
//     });

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand(0, 3));
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand(0, 3));
        console.log(fase2);
    } catch (erro) {
        console.log(erro);
    }
}

executa();
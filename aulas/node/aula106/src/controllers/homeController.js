// const homeModel = require('../models/homeModel');

// homeModel.create({
//     titulo: 'algo muito foda',
//     descricao: 'sla man'
// }).then(dados => console.log(dados)).catch(e => console.log(e));

// homeModel.find().then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    // console.log(req.session.usuario);
    res.render('index', {
        titulo: 'Este é o título da página',
        numeros: [1, 2, 3, 4, 5]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
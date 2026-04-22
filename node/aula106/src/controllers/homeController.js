const homeModel = require('../models/homeModel');

// homeModel.create({
//     titulo: 'algo muito foda',
//     descricao: 'sla man'
// }).then(dados => console.log(dados)).catch(e => console.log(e));

homeModel.find().then(dados => console.log(dados)).catch(e => console.log(e));


exports.paginaInicial = (req, res, next) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
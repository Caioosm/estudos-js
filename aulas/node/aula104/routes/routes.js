// const express = require('express');
// const router = express.Router();
const homeController = require('../src/controllers/homeController');
const contatoController = require('../src/controllers/contatoController');
//rotas da home
router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

//rotas de contato
router.get('/contato', contatoController.paginaInicial);

module.exports = router;
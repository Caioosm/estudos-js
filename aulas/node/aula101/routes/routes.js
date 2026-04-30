const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const contatoController = require('../controllers/contatoController');
//rotas da home
router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

//rotas de contato
router.get('/contato', contatoController.paginaInicial);

module.exports = router;
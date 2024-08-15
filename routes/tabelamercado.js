const express = require('express'); //importa a framework express
const router = express.Router() //cria um roteador
const controlador = require('../controllers/controlador'); //importa o controlador de transações

//definindo uma rota para obter todas as transações
router.get('/', controlador.getAllTabelamercado);

module.exports = router
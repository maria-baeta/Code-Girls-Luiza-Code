// Arquivo de gerenciamento de Endpoints
const express = require('express');
const createdUser = require('./src/app/controllers/userController');
const getAllStore = require('./src/app/controllers/storeController');
const emailValidation = require('./src/app/middlewares/emailValidation');
const passwordValidation = require('./src/app/middlewares/passwordValidation');
const repeatEmailValidation = require('./src/app/middlewares/repeatEmailValidation');
const addProductToOrdered = require('./src/app/controllers/addProductToOrderedController');
const userValidation = require('./src/app/middlewares/userValidation');
const closeTheOrder = require('./src/app/controllers/closeTheOrderController');
const listOrderedUser = require('./src/app/controllers/listOrderedUserController');
const deleteProductToOrdered = require('./src/app/controllers/deleteProductToOrderedController');
const takeTheOrder = require('./src/app/controllers/takeTheOrderController');
const getAllProducts = require('./src/app/controllers/productsController');

const router = express.Router();

// Endpoint Cadastrar cliente
router.post('/user/create', emailValidation, passwordValidation, repeatEmailValidation, createdUser);
// Endpoint Listar lojas físicas
router.get('/store/listAll', getAllStore);
// Endpoint Listar podrutos cadastrados
router.get('/products/listAll', getAllProducts);
// Endpoint Adicionar um produto na lista de compra da cliente;
router.post('/product/:id/addOrdered', emailValidation, passwordValidation, userValidation, addProductToOrdered);
// Endpoint Remover um produto na lista de compra da cliente;
router.delete('/product/:id/deleteOrdered', emailValidation, passwordValidation, userValidation, deleteProductToOrdered);
// Endpoint Finalizar compra
router.put('/closeOrdered', emailValidation, passwordValidation, userValidation, closeTheOrder);
// Endpoint Retirar compra
router.put('/ordered/:id/takeOrdered', emailValidation, passwordValidation, userValidation, takeTheOrder);
// Endpoint Consultar todas as compras realizadas da cliente;
router.get('/ordered/listOrderedUser/:id', listOrderedUser);

module.exports = router;

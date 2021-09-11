const express = require('express');
const createdUser = require('./src/app/controllers/userController');
const getAllStore = require('./src/app/controllers/storeController');
const emailValidation = require('./src/app/middlewares/emailValidation');
const passwordValidation = require('./src/app/middlewares/passwordValidation');
const repeatEmailValidation = require('./src/app/middlewares/repeatEmailValidation');
// const getAllOrdered = require('./src/app/controllers/orderedController');
const addProductToOrdered = require('./src/app/controllers/addProductToOrderedController');
// const getAllOrderedProducts = require('./src/app/controllers/orderedProductsController');
const userValidation = require('./src/app/middlewares/userValidation');
const closeTheOrder = require('./src/app/controllers/closeTheOrderController');
const listOrderedUser = require('./src/app/controllers/listOrderedUserController');
const deleteProductToOrdered = require('./src/app/controllers/deleteProductToOrderedController');
const takeTheOrder = require('./src/app/controllers/takeTheOrderController');
// const productValidation = require('./src/app/middlewares/productValidation');

const router = express.Router();

router.post('/user', emailValidation, passwordValidation, repeatEmailValidation, createdUser);
router.get('/store', getAllStore);
router.post('/product/:id', userValidation, addProductToOrdered);
// router.put('/ordered/:id', userValidation, closeTheOrder);
router.put('/ordered/', userValidation, closeTheOrder);
router.get('/ordered/user', userValidation, listOrderedUser);
router.delete('/product/:id', userValidation, deleteProductToOrdered);
router.put('/ordered/take', userValidation, takeTheOrder);
module.exports = router;

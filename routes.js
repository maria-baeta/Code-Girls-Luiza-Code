const express = require('express');
const createdUser = require('./src/app/controllers/userController');
const getAllStore = require('./src/app/controllers/storeController');
const emailValidation = require('./src/app/middlewares/emailValidation');
const passwordValidation = require('./src/app/middlewares/passwordValidation');
const repeatEmailValidation = require('./src/app/middlewares/repeatEmailValidation');
const getAllOrdered = require('./src/app/controllers/orderedController');
const addProductToOrdered = require('./src/app/controllers/addProductToOrderedController');

const router = express.Router();

router.post('/user', emailValidation, passwordValidation, repeatEmailValidation, createdUser);
router.get('/store', getAllStore);
router.get('/ordered', getAllOrdered);
router.post('/product/:id', addProductToOrdered);

module.exports = router;

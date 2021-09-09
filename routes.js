const express = require('express');
const createdUser = require('./src/app/controllers/userController');

const router = express.Router();

router.post('/user', createdUser);

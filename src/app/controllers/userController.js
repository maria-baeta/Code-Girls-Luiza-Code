// Cria um novo usuário
const { User } = require('../models');
const openTheOrder = require('./openTheOrderController');

// Cria um novo usuário de acordo com informções do mesmo
const createdUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.create({ email, password });
  openTheOrder(newUser.id);
  return res.status(201).json(newUser);
};
module.exports = createdUser;

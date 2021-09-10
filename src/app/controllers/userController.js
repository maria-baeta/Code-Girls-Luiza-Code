const { User } = require('../models');
const openTheOrder = require('./openTheOrderController');

const createdUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.create({ email, password });
  openTheOrder(newUser.id);
  return res.status(201).json(newUser);
};
module.exports = createdUser;

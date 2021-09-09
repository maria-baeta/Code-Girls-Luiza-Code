const { User } = require('../models');
// const { isValidEmail, isValidPassword } = require('./validations');

const createdUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.create({ email, password });
  return res.status(201).json(newUser);
};
module.exports = createdUser;

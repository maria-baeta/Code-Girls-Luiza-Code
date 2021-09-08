const { User } = require('../models');

const createdUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.create({ email, password });
    return res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

module.exports = createdUser;

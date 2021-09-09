const { User } = require('../models');

const isValidEmail = (email) => {
  if (!email) return { message: 'O campo "email" é obrigatório.' };
  if (!email.includes('@') || !email.includes('.com')) {
    return { message: 'O "email" deve ter o formato "email@email.com".' };
  }
};

const isValidPassword = (password) => {
  if (!password) return { message: 'O campo "password" é obrigatório.' };
  if (password.toString().length < 8) {
    return { message: 'O "password" deve ter pelo menos 8 dígitos.' };
  }
  if (typeof (password) !== 'number') {
    return { message: 'O "password" deve conter apenas números' };
  }
};

const isRepeat = async (e) => {
  const user = await User.findOne({ where: { email: e } });
  if (user !== null) {
    return { message: 'Email já cadastrado!' };
  }
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isRepeat,
};

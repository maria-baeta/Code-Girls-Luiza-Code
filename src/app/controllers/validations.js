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
    return { message: 'É necessário informar o i"password" no formato correto (Tipo númerico). ' };
  }
};

const isRepeat = async (e) => {
  const user = await User.findOne({ where: { email: e } });
  if (user !== null) {
    return { message: 'Email já cadastrado.' };
  }
};

const isValidUser = async (emailUser, passwordUser) => {
  if (typeof passwordUser === 'string') return { message: 'É necessário informar o password no formato correto (Tipo númerico). ' };
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  if (user === null) return { message: 'Cliente não cadastrado.' };
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isRepeat,
  isValidUser,
};

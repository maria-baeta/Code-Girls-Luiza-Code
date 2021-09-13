// Arquivo de validações
const { User } = require('../models');

// Valida se o email está sendo informado  e se possui a estrutura correta
const isValidEmail = (email) => {
  if (!email) return { message: 'O campo "email" é obrigatório.' };
  if (!email.includes('@') || !email.includes('.com')) {
    return { message: 'O "email" deve ter o formato "email@email.com".' };
  }
};
// Valida se o password está sendo informado e se possui pelo menos 8 digitos e se é do tipo number
const isValidPassword = (password) => {
  if (!password) return { message: 'O campo "password" é obrigatório.' };
  if (password.toString().length < 8) {
    return { message: 'O "password" deve ter pelo menos 8 dígitos.' };
  }
  if (typeof (password) !== 'number') {
    return { message: 'É necessário informar o "password" no formato correto (Tipo númerico). ' };
  }
};

// Valida se o email já consta cadastrado no banco de dados e não permite que o mesmo seja repetido
const isRepeat = async (e) => {
  const user = await User.findOne({ where: { email: e } });
  if (user !== null) {
    return { message: 'Email já cadastrado.' };
  }
};

// Valida se o usuário já está cadastrado no banco de dados
const isValidUser = async (emailUser, passwordUser) => {
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  if (user === null) return { message: 'Cliente não cadastrado.' };
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isRepeat,
  isValidUser,
};

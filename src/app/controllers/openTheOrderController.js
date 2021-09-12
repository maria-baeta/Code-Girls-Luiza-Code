// Abre um pedido para o usuário
const { Ordered } = require('../models');

// Abre o pedido do usuário de acordo com seu id e seta o status do pedido para "Aberto"
const openTheOrder = async (id) => {
  try {
    await Ordered.create({ user_id: id, status: 'Aberto' });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = openTheOrder;

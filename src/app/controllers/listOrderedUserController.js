// Lista pedidos dos usuários
const { Op } = require('sequelize');
const { Ordered, OrderedProduct } = require('../models');

// Recupera pedidos em que o status seja "Realizado" ou "Retirado" de acordo com o id do usuário
const getAllOrdered = async (idUser) => {
  const ordered = await Ordered.findAll({
    where: {
      [Op.or]: [
        { status: 'Retirado' },
        { status: 'Realizado' },
      ],
      user_id: idUser,
    },
  });
  if (ordered.length === 0) return { message: { message: 'Cliente não cadastrado' }, status: 404 };
  const pedido = await OrderedProduct.findAll({
    where:
      { ordered_id: ordered.map(({ id }) => id) },
  }, { group: 'ordered_id' });
  return pedido;
};

// Lista pedidos do usuário recuperados na função getAllOrdered
const listOrderedUser = async (req, res) => {
  const { id } = req.params;
  const pedidos = await getAllOrdered(id);
  res.status(pedidos.status || 200).json(pedidos.message || pedidos);
};

module.exports = listOrderedUser;

const { Op } = require('sequelize');
const { Ordered, OrderedProduct } = require('../models');

const getAllOrdered = async (idUser) => {
  // const user = await User.findOne({ where: { email, password } });
  // const idUser = user.id;
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

const listOrderedUser = async (req, res) => {
  // const { email, password } = req.body;
  const { id } = req.params;
  const pedidos = await getAllOrdered(id);
  // if (pedidos.length === 0) return res.status(400).json({ message: pedidos.message });
  res.status(pedidos.status || 200).json(pedidos.message || pedidos);
};

module.exports = listOrderedUser;

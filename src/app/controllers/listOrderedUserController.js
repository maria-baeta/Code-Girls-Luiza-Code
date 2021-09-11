const { Op } = require('sequelize');
const { Ordered, User, OrderedProduct } = require('../models');

const getAllOrdered = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  const idUser = user.id;
  const ordered = await Ordered.findAll({
    where: {
      [Op.or]: [
        { status: 'Retirado' },
        { status: 'Realizado' },
      ],
      user_id: idUser,
    },
  });

  const pedido = await OrderedProduct.findAll({
    where:
      { ordered_id: ordered.map(({ id }) => id) },
  }, { group: 'ordered_id' });
  return pedido;
};

const listOrderedUser = async (req, res) => {
  const { email, password } = req.body;
  const pedidos = await getAllOrdered(email, password);
  res.status(200).json(pedidos);
};

module.exports = listOrderedUser;

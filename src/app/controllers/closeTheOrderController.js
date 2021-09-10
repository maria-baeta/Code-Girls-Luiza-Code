const { Ordered } = require('../models');

const closeTheOrder = async (req, res) => {
  const { id: idOrdered } = req.params;
  const { idStore } = req.body;
  const ordered = await Ordered.findOne({ where: { status: 'Aberto', id: idOrdered } });
  if (!ordered) return res.status(400).json({ message: 'Seu pedido não está em aberto!' });
  Ordered.update({ status: 'Realizada', store_id: idStore }, { where: { status: 'Aberto', id: idOrdered } });
  return res.status(200).json({ message: 'Pedido finalizado' });
};

module.exports = closeTheOrder;

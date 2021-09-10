const { Ordered, User } = require('../models');

const closeTheOrder = async (req, res) => {
  // const { id: idOrdered } = req.params;
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const { idStore } = req.body;
  const ordered = await Ordered.findOne({ where: { status: 'Aberto', user_id: idUser } });
  if (!ordered) return res.status(400).json({ message: 'Seu pedido não está em aberto!' });
  Ordered.update({ status: 'Realizada', store_id: idStore }, { where: { status: 'Aberto', id: ordered.id } });
  return res.status(200).json({ message: 'Pedido finalizado' });
};

module.exports = closeTheOrder;

const { Ordered, User } = require('../models');

const takeTheOrder = async (req, res) => {
  const { id: idOrder } = req.params;
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const ordered = await Ordered.findOne({ where: { status: 'Realizado', user_id: idUser, id: idOrder } });
  if (!ordered) return res.status(404).json({ message: 'Não existe pedidos aguardando retirada.' });
  Ordered.update({ status: 'Retirado' }, { where: { status: 'Realizado', id: ordered.id } });
  return res.status(200).json({ message: 'Pedido retirado.' });
};
module.exports = takeTheOrder;

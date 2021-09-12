// Fecha o pedido
const { Ordered, User, Store } = require('../models');

// Verifica o status do pedido e se o mesmo for "Aberto" irá altera-lo para "Realizado"
const closeTheOrder = async (req, res) => {
  const { email: emailUser, password: passwordUser, idStore } = req.body;
  if (idStore === undefined) return res.status(411).json({ message: 'É necessário informar a loja que será retirado o pedido.' });
  if (typeof (idStore) === 'string') return res.status(400).json({ message: 'É necessário informar o id da loja no formato correto (Tipo númerico). ' });
  const store = await Store.findOne({ where: { id: idStore } });
  if (store === null) return res.status(404).json({ message: 'Loja não encontrada.' });
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const ordered = await Ordered.findOne({ where: { status: 'Aberto', user_id: idUser } });
  if (!ordered) return res.status(404).json({ message: 'Seu pedido não está em aberto.' });
  Ordered.update({ status: 'Realizado', store_id: idStore }, { where: { status: 'Aberto', id: ordered.id } });
  return res.status(200).json({ message: 'Pedido finalizado.' });
};

module.exports = closeTheOrder;

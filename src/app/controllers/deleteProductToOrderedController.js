const {
  Product, Ordered, OrderedProduct, User,
} = require('../models');

const deleteProductToOrdered = async (req, res) => {
  const { id } = req.params;
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const product = await Product.findByPk(id);
  if (product === null) return res.status(404).json({ message: 'Produto não encontrado no pedido.' });
  const ordered = await Ordered.findOne({ where: { user_id: idUser, status: 'Aberto' } });
  if (ordered === null) return res.status(404).json({ message: 'Pedido já fechado.' });
  const orderedProduct = await OrderedProduct.findOne({
    where: {
      ordered_id: ordered.id,
      product_id: product.id,
    },
  });
  if (orderedProduct === null) return res.status(404).json({ message: 'Produto não encontrado no pedido.' });
  await OrderedProduct.destroy({
    where: {
      ordered_id: ordered.id,
      product_id: product.id,
    },
  });
  res.status(200).json({ message: 'Produto retirado do pedido.' });
};
module.exports = deleteProductToOrdered;

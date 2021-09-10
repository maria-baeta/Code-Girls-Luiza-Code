const {
  Product, Ordered, OrderedProduct, User,
} = require('../models');

const deleteProductToOrdered = async (req, res) => {
  const { id } = req.params;
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const product = await Product.findByPk(id);
  const ordered = await Ordered.findOne({ where: { user_id: idUser, status: 'aberto' } });
  const orderedProduct = await OrderedProduct.findOne({
    where: {
      ordered_id: ordered.id,
      product_id: product.id,
    },
  });
  if (orderedProduct === null) return res.status(400).json({ message: 'Produto já retirado do carrinho' });
  await OrderedProduct.destroy({
    where: {
      ordered_id: ordered.id,
      product_id: product.id,
    },
  });
  res.status(200).json({ message: 'Produto retirado do carrinho' });
};
module.exports = deleteProductToOrdered;

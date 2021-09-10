const {
  Product, Ordered, OrderedProduct, User,
} = require('../models');
const openTheOrder = require('./openTheOrderController');

const addProductToOrdered = async (req, res) => {
  try {
    const { id } = req.params;
    const { email: emailUser, password: passwordUser } = req.body;
    const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
    const idUser = user.id;
    const product = await Product.findByPk(id);
    const ordered = await Ordered.findOne({ where: { user_id: idUser, status: 'aberto' } });
    if (product === null) return res.status(401).json({ message: 'Produto não encontrado' });
    if (ordered === null) {
      openTheOrder(idUser);
      return res.status(200).json({ message: 'Novo carrinho abeto, realize novamente o procedimento' });
    }
    const orderedProduct = await OrderedProduct.findOne({
      where: {
        ordered_id: ordered.id,
        product_id: product.id,
      },
    });
    if (orderedProduct === null) {
      await OrderedProduct.create({
        price: product.price,
        ordered_id: ordered.id,
        product_id: product.id,
      });
      return res.status(200).json({ message: 'Produto adicionado ao carrinho com sucesso' });
    }
    return res.status(401).json({ message: 'Produto já adicionado' });
  } catch (e) {
    return res.send(e);
  }
};

module.exports = addProductToOrdered;

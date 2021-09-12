// Adiciona produtos ao pedido
const {
  Product, Ordered, OrderedProduct, User,
} = require('../models');
const openTheOrder = require('./openTheOrderController');

// Adiciona produto ao pedido de acordo com dados informados do usuário e id do pedido
const addProduct = async (id, e, p) => {
  const user = await User.findOne({ where: { email: e, password: p } });
  const idUser = user.id;
  const ordered = await Ordered.findOne({ where: { user_id: idUser } });
  const product = await Product.findByPk(id);
  if (product === null) return { message: 'Produto não encontrado', status: 400 };
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
    return { message: 'Produto adicionado ao carrinho com sucesso', status: 200 };
  }
  return { message: 'Produto já adicionado', status: 400 };
};

// Adiciona produto o pedido
const addProductToOrdered = async (req, res) => {
  try {
    const { id } = req.params;
    const { email: emailUser, password: passwordUser } = req.body;
    const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
    const idUser = user.id;
    const product = await Product.findByPk(id);
    const ordered = await Ordered.findOne({ where: { user_id: idUser, status: 'Aberto' } });
    if (product === null) return res.status(401).json({ message: 'Produto não encontrado' });
    // Verifaca status do pedido se o mesmo for "Aberto" adiciona o produto,
    // se não, será aberto um novo pedido e adicionado o produto.
    if (ordered === null) {
      openTheOrder(idUser);
      const response = await addProduct(id, emailUser, passwordUser);
      if (response) return res.status(response.status).json({ message: response.message });
    }
    const newProductAdd = await addProduct(id, emailUser, passwordUser);
    if (newProductAdd) res.status(newProductAdd.status).json({ message: newProductAdd.message });
  } catch (e) {
    return res.send(e);
  }
};

module.exports = addProductToOrdered;

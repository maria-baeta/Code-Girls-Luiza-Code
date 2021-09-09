const { Product, Ordered, OrderedProducts } = require('../models');

const addProductToOrdered = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: idUser } = req.body;
    const product = await Product.findByPk(id);
    const ordered = await Ordered.findOne({ where: { user_id: idUser } });
    if (product === null) return res.status(404).json({ message: 'Produto não encontrado' });
    if (ordered === null) return res.status(404).json({ message: 'Cliente não cadastrado' });
    await OrderedProducts.create({
      price: product.price,
      orderedId: ordered.id,
      productId: product.id,
    });
    return res.status(200).json({ message: 'Produto adicionado com sucesso' });
  } catch (e) {
    console.error(e);
  }
};

module.exports = addProductToOrdered;

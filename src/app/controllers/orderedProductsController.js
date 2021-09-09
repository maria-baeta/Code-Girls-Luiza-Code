const { OrderedProduct } = require('../models');

const getAllOrderedProducts = async (req, res) => {
  console.log('To aqui');
  try {
    const ordered = await OrderedProduct.findAll();
    return res.status(200).json(ordered);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = getAllOrderedProducts;

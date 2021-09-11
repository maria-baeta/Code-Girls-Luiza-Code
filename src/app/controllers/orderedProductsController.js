const { OrderedProduct } = require('../models');

const getAllOrderedProducts = async (req, res) => {
  try {
    const ordered = await OrderedProduct.findAll();
    return res.status(200).json(ordered);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = getAllOrderedProducts;

const { OrderedProducts } = require('../models');

const getAllOrderedProducts = async (req, res) => {
  try {
    const ordered = await OrderedProducts.findAll();
    return res.status(200).json(ordered);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = getAllOrderedProducts;

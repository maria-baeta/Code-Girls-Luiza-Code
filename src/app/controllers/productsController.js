// Lista produtos
const { Product } = require('../models');

// Lista todas as lojas físicas
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

module.exports = getAllProducts;

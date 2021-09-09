const { isValidProduct } = require('../controllers/validations');

const productValidation = async (req, res, next) => {
  const { id } = req.body;
  const response = await isValidProduct(id);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = productValidation;

const { isValidUser } = require('../controllers/validations');

const userValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const response = await isValidUser(email, password);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = userValidation;

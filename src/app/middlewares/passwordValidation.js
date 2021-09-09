const { isValidPassword } = require('../controllers/validations');

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const response = isValidPassword(password);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = passwordValidation;

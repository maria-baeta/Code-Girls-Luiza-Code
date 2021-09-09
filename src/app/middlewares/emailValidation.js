const { isValidEmail } = require('../controllers/validations');

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const response = isValidEmail(email);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = emailValidation;

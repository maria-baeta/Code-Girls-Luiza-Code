const { isRepeat } = require('../controllers/validations');

const repeatEmailValidation = async (req, res, next) => {
  const { email } = req.body;
  const response = await isRepeat(email);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = repeatEmailValidation;

const { isValidEmail } = require('../controllers/validations');

const emailValidation = (req, res, next) => {
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const ordered = await Ordered.findOne({ where: { user_id: idUser } });
  
  // const response = isValidEmail(email);
  if (response) return res.status(401).json({ message: response.message });
  next();
};

module.exports = emailValidation;

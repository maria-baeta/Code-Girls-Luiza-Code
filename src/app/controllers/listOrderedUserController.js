const { Ordered, User, OrderedProduct } = require('../models');

const listOrderedUser = async (req, res) => {
  const { email: emailUser, password: passwordUser } = req.body;
  const user = await User.findOne({ where: { email: emailUser, password: passwordUser } });
  const idUser = user.id;
  const ordered = await Ordered.findAll({ where: { user_id: idUser, status: 'Realizada' } });
  const orderedProduct = ordered.map(async (o) => {
    const order = await OrderedProduct.findAll({ where: { ordered_id: o.id } });
    return order.map((or) => or);
    // console.log(order);
  });
  const order = await orderedProduct;
  console.log('To aqui', order);
  res.status(200).json(orderedProduct);
};

module.exports = listOrderedUser;

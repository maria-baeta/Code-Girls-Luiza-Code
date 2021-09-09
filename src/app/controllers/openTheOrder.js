const { Ordered } = require('../models');

const openTheOrder = async (id) => {
  try {
    await Ordered.create({ user_id: id, status: 'aberto' });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = openTheOrder;

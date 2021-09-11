const { Store } = require('../models');

const getAllStore = async (req, res) => {
  try {
    const store = await Store.findAll();
    return res.status(200).json(store);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

module.exports = getAllStore;

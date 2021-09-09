const { Ordered } = require('../models');

const getAllOrdered = async (req, res) => {
  try {
    const ordered = await Ordered.findAll();
    return res.status(200).json(ordered);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = getAllOrdered;

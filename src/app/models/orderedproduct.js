const OrderedProducts = (sequelize, DataTypes) => {
  const DataOrderedProduct = sequelize.define('OrderedProduct', {
    orderedId: {
      type: DataTypes.INTEGER,
      unique: true,

    },
    productId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    price: DataTypes.DECIMAL(10, 2),
  }, { timestamps: false });

  return DataOrderedProduct;
};

module.exports = OrderedProducts;

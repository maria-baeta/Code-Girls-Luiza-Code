const OrderedProduct = (sequelize, DataTypes) => {
  const DataOrderedProduct = sequelize.define('OrderedProduct', {
    price: DataTypes.DECIMAL(10, 2),
  });
  DataOrderedProduct.associate = (models) => {
    models.Ordered.belongsToMany(models.Product, {
      as: 'products',
      through: DataOrderedProduct,
      foreignKey: 'ordered_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Ordered, {
      as: 'ordereds',
      through: DataOrderedProduct,
      foreignKey: 'product_id',
      otherKey: 'ordered_id',
    });
  };
  //   ordered_id: {
  //     type: DataTypes.INTEGER,
  //     unique: true,

  //   },
  //   productId: {
  //     type: DataTypes.INTEGER,
  //     unique: true,
  //   },
  //   price: DataTypes.DECIMAL(10, 2),
  // }, { timestamps: false });

  return DataOrderedProduct;
};

module.exports = OrderedProduct;

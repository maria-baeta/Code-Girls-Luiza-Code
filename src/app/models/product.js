const Product = (sequelize, DataTypes) => {
  const DataProduct = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false,
    tableName: 'Products',
    underscored: true,
  });
  return DataProduct;
};

module.exports = Product;

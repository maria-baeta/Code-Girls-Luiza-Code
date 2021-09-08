const Ordered = (sequelize, DataTypes) => {
  const DataOrdered = sequelize.define('Ordered', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    storeId: { type: DataTypes.INTEGER, foreignKey: true },
    status: DataTypes.STRING,
  });
  DataOrdered.associate = (models) => {
    DataOrdered.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users' });
    DataOrdered.belongsTo(models.Store,
      { foreignKey: 'store_id', as: 'stores' });
  };
  return DataOrdered;
};
module.exports = Ordered;

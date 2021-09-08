const Store = (sequelize, DataTypes) => {
  const DataStore = sequelize.define('Store', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Stores',
    underscored: true,
  });
  DataStore.associate = (models) => {
    DataStore.hasMany(models.Ordered,
      { foreignKey: 'store_id', as: 'ordereds' });
  };
  return DataStore;
};

module.exports = Store;

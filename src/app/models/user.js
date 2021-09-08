const User = (sequelize, DataTypes) => {
  const DataUser = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });
  DataUser.associate = (models) => {
    DataUser.hasMany(models.Ordered,
      { foreignKey: 'user_id', as: 'ordereds' });
  };
  return DataUser;
};

module.exports = User;

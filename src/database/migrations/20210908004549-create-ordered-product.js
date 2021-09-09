module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderedProducts', {
      // id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      ordered_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        fields: 'ordered_id',
        references: {
          model: 'Ordereds',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        // allowNull: false,
      },
      product_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        fields: 'productId',
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        // allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // .then(() => queryInterface.addConstraint('OrderedProducts', {
    //   fields: ['orderedId', 'productId'],
    //   type: 'unique',
    //   name: 'ordered_product_pkey',
    // }));
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('OrderedProducts');
  },
};

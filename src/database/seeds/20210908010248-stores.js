module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Stores', [
    {
      name: 'MariaBaeta',
    },
    {
      name: 'JanaMorato',
    },
    {
      name: 'KassOliver',
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Stores', null, {}),
};

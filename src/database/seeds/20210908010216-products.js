module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [
    {
      name: 'Notebook',
      price: 5399.10,

    },
    {
      name: 'Fone de Ouvido',
      price: 106.16,

    },
    {
      name: 'Impressora',
      price: 944.91,

    },
    {
      name: 'Teclado',
      price: 203.86,

    },
    {
      name: 'Mouse',
      price: 29.90,

    },
    {
      name: 'Monitor',
      price: 994.91,

    },
    {
      name: 'Hd Externo',
      price: 305.10,

    },
    {
      name: 'Pen Drive',
      price: 41.32,

    },
    {
      name: 'Suporte Ergonômico',
      price: 42.00,

    },
    {
      name: 'Cartão de Memória',
      price: 54.90,

    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};

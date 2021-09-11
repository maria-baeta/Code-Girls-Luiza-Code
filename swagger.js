const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes.js'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'CODE GIRLS API',
    description: 'O objetivo é desenvolver um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente. ',
  },
  host: 'localhost:3001/code-girls',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  definitions: {
    User: {
      email: 'jhondoe@test.com',
      password: 12345678,
    },
    Store: {
      name: 'MariaBaeta',
      id: 1,
    },
    Products: {
      name: 'Notebook',
      price: 10.00,
    },
    Ordered: {
      id: 1,
      user_id: 1,
      store_id: 1,
      status: 'Aberto',
    },
    OrderedProduct: {
      price: 10.00,
      product_id: 1,
      ordered_id: 1,
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index');
});

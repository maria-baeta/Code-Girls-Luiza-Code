// Arquivo de inicialização da API

const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const router = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;
// Criação do servidor
http.createServer(app).listen(PORT);
console.log(`localHost na porta ${PORT}!`);

app.use(bodyParser.json());
// Chamada do Swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
// Chamada dos Endpoints
app.use('/code-girls', router);

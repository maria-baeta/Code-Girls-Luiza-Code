const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const router = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

http.createServer(app).listen(PORT);
console.log(`localHost na porta ${PORT}!`);

app.use(bodyParser.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/code-girls', router);

// app.listen(PORT, () => console.log(`localHost na porta ${PORT}!`));

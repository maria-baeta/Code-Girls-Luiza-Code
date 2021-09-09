const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./src/app/controllers/userController');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

app.use('/code-girl', userController);

app.listen(PORT, () => console.log(`localHost na porta ${PORT}!`));

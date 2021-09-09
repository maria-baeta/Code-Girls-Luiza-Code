const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

app.use('/code-girls', router);

app.listen(PORT, () => console.log(`localHost na porta ${PORT}!`));

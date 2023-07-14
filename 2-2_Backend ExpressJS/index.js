// REFERENSI : https://medium.com/7span/crud-operation-using-node-js-and-express-js-a0d63a2216aa

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const itemRoute = require('./routes/songs');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/api', itemRoute);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});

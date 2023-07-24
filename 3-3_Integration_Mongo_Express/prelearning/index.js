require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database connect');
});

const app = express();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api', router);

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});

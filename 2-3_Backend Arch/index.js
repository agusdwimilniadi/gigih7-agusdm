const express = require('express');
const bodyParser = require('body-parser');

const { transfer } = require('./services/transfer');
const { getAllCustomers } = require('./model/customer');
const { getTransaction } = require('./model/transaction');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/getAll', (req, res) => {
  res.status(200).send(getAllCustomers());
});
app.post('/transaction', (req, res) => {
  try {
    const { sourceAccount, destinationAccount, amount } = req.body;
    if (!sourceAccount || !destinationAccount || !amount) {
      throw new Error(
        'Paramters sourceAccount, destinationAccount, amount is required'
      );
    }
    transfer(sourceAccount, destinationAccount, amount);
    res.status(201).json({ message: 'Transaksi sukses' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/history', (req, res) => {
  res.status(200).send(getTransaction());
});

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});

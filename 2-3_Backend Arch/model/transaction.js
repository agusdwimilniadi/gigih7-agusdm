const { generateId } = require('../utils/utils');

let transactions = [
  {
    transactionId: 1,
    sourceId: 1,
    destinationId: 1,
    amount: 500,
    timestamp: new Date(),
  },
];

function createTransaction(sourceId, destinationId, amount) {
  const transaction = {
    transactionId: generateId(),
    sourceId: sourceId,
    destinationId: destinationId,
    amount: amount,
    timestamp: new Date().toISOString(),
  };
  transactions.push(transaction);
  return transaction;
}
function getTransaction() {
  return transactions;
}
module.exports = {
  createTransaction,
  getTransaction,
};

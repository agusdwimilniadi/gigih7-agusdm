const { getCustomer } = require('../model/customer');
const { createTransaction } = require('../model/transaction');

function transfer(sourceId, destinationId, amount) {
  const sourceAccount = getCustomer(sourceId);
  const destinationAccount = getCustomer(destinationId);

  if (!sourceAccount || !destinationAccount) {
    throw new Error('Invalid source or destination account');
  }
  if (sourceAccount.ballance < amount) {
    throw new Error('Uang tidak cukup');
  }
  sourceAccount.ballance = sourceAccount.ballance - amount;
  destinationAccount.ballance = destinationAccount.ballance + amount;
  createTransaction(
    sourceAccount.customerId,
    destinationAccount.customerId,
    amount
  );
}
module.exports = {
  transfer,
};

let customers = [
  {
    customerId: 1,
    name: 'Agus Dwi Milniadi',
    email: 'agusdwimill@gmail.com',
    ballance: 10000,
  },
  {
    customerId: 2,
    name: 'Agus Dwi Milniadi',
    email: 'agusdwimill@gmail.com',
    ballance: 20000,
  },
];

function getAllCustomers() {
  return customers;
}

function getCustomer(customerId) {
  const filteredCustomer = customers.find(
    (item) => item.customerId === customerId
  );
  return filteredCustomer;
}

function createCustomer(name, email, initialBallance) {
  let newCustomer = {
    customerId: customers.length + 1,
    name: name,
    email: email,
    ballance: initialBallance,
  };
  return newCustomer;
}
module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
};

function generateId() {
  return Math.random.toString(10).substring(2, 15);
}

module.exports = {
  generateId,
};

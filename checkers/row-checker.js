const { counter } = require('./helpers/base-obj.js');

const checkRow = (grid, rowNumber) => {
  return counter(grid[rowNumber - 1]);
};

const checkAllRows = (grid) => {
  const results = grid.map((row, rowNumber) => checkRow(grid, rowNumber + 1));

  return !results.includes(false);
};

module.exports = {
  checkRow,
  checkAllRows,
};

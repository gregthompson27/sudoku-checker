const { base } = require('./helpers/base-counter.js');

const checkRow = (grid, rowNumber) => {
  const rowContents = grid[rowNumber - 1].reduce((total, current) => {
    total[current]++;
    return total;
  }, Object.assign({}, base));

  return Math.max(...Object.values(rowContents)) === 1 ? true : false;
};

const checkAllRows = (grid) => {
  const results = grid.map((row, rowNumber) => checkRow(grid, rowNumber + 1));

  return !results.includes(false);
};

module.exports = {
  checkRow,
  checkAllRows,
};

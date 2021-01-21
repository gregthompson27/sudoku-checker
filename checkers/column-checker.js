const { counter } = require('./helpers/base-obj.js');

const checkColumn = (grid, columnNumber) => {
  const colContents = grid.map(row => row[columnNumber - 1]);
  return counter(colContents);
};

const checkAllColumns = (grid) => {
  const columnResults = [];
  for (let i = 1; i < 10; i++) {
    columnResults.push(checkColumn(grid, i));
  }

  return !columnResults.includes(false);
};

module.exports = {
  checkColumn,
  checkAllColumns,
};

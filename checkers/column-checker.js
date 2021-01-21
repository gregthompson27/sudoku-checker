const { counter } = require('./helpers/base-obj.js');

const checkColumn = (grid, columnNumber) => {
  const colContents = grid.map(row => row[columnNumber - 1]);
  return counter(colContents);
};

// console.log(checkColumn(goodSolution, 3));

const checkAllColumns = (grid) => {
  const columnResults = [];
  for (let i = 1; i < 10; i++) {
    columnResults.push(checkColumn(grid, i));
  }

  console.log('col results: ', columnResults);
  return !columnResults.includes(false);
};

module.exports = {
  checkColumn,
  checkAllColumns,
};

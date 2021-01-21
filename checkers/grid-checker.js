const { checkAllBoxes } = require('../checkers/box-checker.js');
const { checkAllColumns } = require('../checkers/column-checker.js');
const { checkAllRows } = require('../checkers/row-checker.js');

module.exports.checkGrid = grid => {
  const checks = [];
  checks.push(checkAllBoxes(grid));
  checks.push(checkAllColumns(grid));
  checks.push(checkAllRows(grid));

  return !checks.includes(false);
};
const expect = require('chai').expect;
const { badSolution, goodSolution } = require('../solutions/grids.js');

describe('Individual Column Checker', () => {
  const checkColumn = require('../checkers/column-checker.js');
  
  it('Should return a boolean', () => {
    expect(checkColumn(badSolution, 1)).to.be.a('boolean');
  });

  it('Should return true for columns that have 9 unique numbers', () => {
    expect(checkColumn(badSolution, 1)).to.be.true;
    expect(checkColumn(goodSolution, 6)).to.be.true;
  });

  it('Should return false for columns that have duplicate numbers', () => {
    expect(checkColumn(badSolution, 6)).to.be.false;
  });
});

describe('All Columns Checker', () => {
  const { checkAllColumns } = require('../checkers/column-checker.js');

  it('Should return a boolean', () => {
    expect(checkAllColumns(badSolution)).to.be.a('boolean');
  });
  
  it('Should return true for grids with each column containing entirely unique numbers', () => {
    expect(checkAllColumns(goodSolution)).to.be.true;
  });

  it('Should return false for grids containing one or more incorrect column', () => {
    expect(checkAllColumns(badSolution)).to.be.false;
  });
});

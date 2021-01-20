const expect = require('chai').expect;
const { badSolution, goodSolution } = require('../solutions/grids.js');

describe('Individual Row Checker', () => {
  const { checkRow } = require('../checkers/row-checker.js');
  
  it('Should return a boolean', () => {
    expect(checkRow(badSolution, 1)).to.be.a('boolean');
  });

  it('Should return true for rows that have 9 unique numbers', () => {
    expect(checkRow(badSolution, 1)).to.be.true;
    expect(checkRow(goodSolution, 3)).to.be.true;
  });

  it('Should return false for rows that have duplicate numbers', () => {
    expect(checkRow(badSolution, 3)).to.be.false;
  });
});

describe('All Rows Checker', () => {
  const { checkAllRows } = require('../checkers/row-checker.js');

  it('Should return a boolean', () => {
    expect(checkAllRows(badSolution)).to.be.a('boolean');
  });
  
  it('Should return true for grids with each row containing entirely unique numbers', () => {
    expect(checkAllRows(goodSolution)).to.be.true;
  });

  it('Should return false for grids containing one or more incorrect row', () => {
    expect(checkAllRows(badSolution)).to.be.false;
  });
});

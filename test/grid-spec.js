const expect = require('chai').expect;
const { goodSolution, badSolution } = require('../solutions/grids.js');

describe('Grid Checker', () => {
  const { checkGrid } = require('../checkers/grid-checker.js');

  it('Should return a boolean', () => {
    expect(checkGrid(badSolution)).to.be.a('boolean');
  });

  it('Should return true for grids that have no mistakes', () => {
    expect(checkGrid(goodSolution)).to.be.true;
  });

  it('Should return false for grids that have at least one mistake', () => {
    expect(checkGrid(badSolution)).to.be.false;
  });
});

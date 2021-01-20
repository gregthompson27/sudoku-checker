const expect = require('chai').expect;
const { goodSolution, badSolution } = require('../solutions/grids.js');

describe('Individual Box Checker', () => {
  const { checkBox } = require('../checkers/box-checker.js');

  it('Should return a boolean', () => {
    expect(checkBox(badSolution, 1)).to.be.a('boolean');
  });

  it('Should return true for 3x3 boxes that have 9 unique numbers', () => {
    expect(checkBox(badSolution, 1)).to.be.true;
    expect(checkBox(goodSolution, 2)).to.be.true;
  });

  it('Should return false for 3x3 boxes that have duplicate numbers', () => {
    expect(checkBox(badSolution, 2)).to.be.false;
  });
});

describe('All Boxes Checker', () => {
  const { checkAllBoxes } = require('../checkers/box-checker.js');

  it('Should return a boolean', () => {
    expect(checkAllBoxes(badSolution)).to.be.a('boolean');
  });

  it('Should return true for grids with each box containing entirely unique numbers', () => {
    expect(checkAllBoxes(goodSolution)).to.be.true;
  });

  it('Should return false for grids containing one or more incorrect boxes', () => {
    expect(checkAllBoxes(badSolution)).to.be.false;
  });
});

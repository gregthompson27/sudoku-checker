const { counter } = require('./helpers/base-obj.js');

const checkBox = (grid, boxNumber) => {
  const up = Math.floor((boxNumber - 1) / 3) * 3
  const across = ((boxNumber - 1) % 3) * 3
  const boxContents = [];
  for (let i = up; i < up + 3; i++) {
    for (let j = across; j < across + 3; j++) {
      boxContents.push(grid[i][j]);
    }
  }

  return counter(boxContents);
};

const checkAllBoxes = (grid) => {
  const boxResults = [];
  for (let i = 1; i < 10; i++) {
    boxResults.push(checkBox(grid, i));
  }

  return !boxResults.includes(false);
};

module.exports = {
  checkBox,
  checkAllBoxes,
}
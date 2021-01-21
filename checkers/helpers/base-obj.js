const base = {
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 0,
  '8': 0,
  '9': 0,
};

module.exports.counter = digits => {
  const tally = digits.reduce((total, current) => {
    total[current]++;
    return total;
  }, Object.assign({}, base));

  return Math.max(...Object.values(tally)) === 1 ? true : false;
};
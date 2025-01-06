const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1
  const res = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
      res.push(counter + str[i])
      counter = 1
    } else {
      res.push(str[i])
    }
  }
  return res.join("")
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("")
  let res = 0
  arr.forEach((item, index, array) => {
    let a = array.splice(index, 1)[0]
    let b = Number(array.join(""))
    if(b > res) {
      res = b
    }
    array.splice(index, 0, a)
  })
  return res
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    result.push([])
    for (let j = 0; j < matrix[0].length; j++) {
      result[i].push(0)

      const mine1 = matrix[i]?.[j - 1] ? 1 : 0
      const mine2 = matrix[i]?.[j + 1] ? 1 : 0
      const mine3 = matrix[i - 1]?.[j] ? 1 : 0
      const mine4 = matrix[i - 1]?.[j - 1] ? 1 : 0
      const mine5 = matrix[i - 1]?.[j + 1] ? 1 : 0
      const mine6 = matrix[i + 1]?.[j] ? 1 : 0
      const mine7 = matrix[i + 1]?.[j - 1] ? 1 : 0
      const mine8 = matrix[i + 1]?.[j + 1] ? 1 : 0

      result[i][j] =
        mine1 + mine2 + mine3 + mine4 + mine5 + mine6 + mine7 + mine8
    }
  }

  return result
}

module.exports = {
  minesweeper
};

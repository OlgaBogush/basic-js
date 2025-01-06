const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = ""
  const array = []
  const addition = []

  const separator = options.separator || "+"
  const additionSeparator = options.additionSeparator || "|"
  const repeatTimes = options.repeatTimes || 1
  const additionRepeatTimes = options.additionRepeatTimes || 1

  for (let i = 0; i < repeatTimes; i++) {
    array[i] = String(str)
  }
  if (String(options.addition) && typeof options.addition !== "undefined") {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addition[i] = String(options.addition)
    }
  }
  const part = addition.join(additionSeparator)
  string = array.join(part + separator) + part

  return string
}

module.exports = {
  repeater
};

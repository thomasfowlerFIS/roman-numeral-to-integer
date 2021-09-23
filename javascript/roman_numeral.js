const romanNumeral = (string) => {
  const numeralMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  console.log(string)
  const numerals = string.split('')
  return numerals.reduce((p, c, i, arr) => {
    const curVal = numeralMap[c.toUpperCase()]
    if (i === 0) return curVal 
    const preVal = numeralMap[arr[i - 1]]
    const tempVal = preVal >= curVal ? p + curVal : (p - preVal) + (curVal - preVal)
    return tempVal 
  }, 0)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

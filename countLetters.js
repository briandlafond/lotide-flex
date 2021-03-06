const countLetters = function(string) {

  let result = {};

  for (const letter of string) {
    if (letter !== ' ')
      if (result[letter]) {
        result[letter] += 1;
      } else if (string[letter] !== " ") {
        result[letter] = 1;
      }
  }
  return result;

};

let testString = "brian daniel lafond zzzzz";

console.log(countLetters(testString));

module.exports = countLetters;
const takeUntil = function(array, callback) {
  let slicedArray = [];
  for (const element of array) {
    if (callback(element)) {
      return slicedArray;
    } else {
      slicedArray.push(element);
    }
  }
  return slicedArray;
};

//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;
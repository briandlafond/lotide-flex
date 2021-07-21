const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
          return false;
      }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {

  let isEqual = eqArrays(actual, expected);

  if (isEqual) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`)
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should FAIL
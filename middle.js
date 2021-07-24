const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const middle = function(array) {

  if (array.length < 3) { // if array is less that 3 elements, return []. no middle element
    return [];
  } else {
    if (array.length % 2 === 0) { // if array is divisible by two (even)
      let evenIndex = (Math.floor(array.length / 2)); // array index length / 2 = lesser of the array index
      return [array[evenIndex - 1], array[evenIndex]]; // returns former and latter of even indicies
    } else {
      let oddIndex = (Math.floor(array.length / 2));
      return [array[oddIndex]];
    }
  }
};


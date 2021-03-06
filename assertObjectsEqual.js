const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {

  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  
  for (let key of objKeys1) {
    if (Array.isArray(object1[key] || Array.isArray(object2[key]))) {
      return (eqArrays(object1[key], object2[key]));
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

module.exports = assertObjectsEqual;
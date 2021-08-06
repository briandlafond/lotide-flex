const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


assertArraysEqual([1, 2, 3], [1, 2, 3]); //should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); //should FAIL


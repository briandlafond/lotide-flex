const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); //should FAIL


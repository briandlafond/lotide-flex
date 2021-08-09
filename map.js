const words = ['brian', 'daniel', 'goes', 'to', 'bootcamp'];

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const result1 = map(words, word => word[0]);
console.log(result1);

module.exports = map;
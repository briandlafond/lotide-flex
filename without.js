const without = function(source, itemsToRemove) {

  for (let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};



//TEST CASES
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//why log the correct answer but not return the right answer?
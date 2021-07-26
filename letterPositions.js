const letterPositions = (string) => {
  
  const results = {};
  
  for (let i = 0; i < string.length; i++) { // loop through given sentence
    const letter = string[i];// letter character = index of sentence
    if (letter !== ' ') {  //bypass whitespace
      if (results[letter] && Array.isArray(results[letter])) {
        results[letter].push(i); // adds index position of subsequent character occurence within object
      } else {
        results[letter] = [i]; // sets up the the character for first time in the new object w/ index value
      }
    }
  }

  return results;

};

console.log(letterPositions("lighthouse in the house"));
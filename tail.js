const tail = function(array) {
  if (array) {
    return array.slice(1);
  } else {
    return undefined;
  }
};


module.exports = tail;
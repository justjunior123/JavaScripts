// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

const common = ( (array) => {
  let counter = 0;
  let hashTable = {};
  let answerKey = "";

  for (var i = 0; i <= array.length - 1; i++) {
    let currentElement = array[i];

    // console.log('current iteration i: ',i,'hashTable[currentElement]',hashTable[currentElement]);
    hashTable[currentElement] = ( hashTable[currentElement]+1 || 1 );

  }

  for (const key in hashTable){
    if (hashTable.hasOwnProperty(key)) {
      if (hashTable[key] >= counter) {
        answerKey = key;
        counter = hashTable[key];
      }
    }
  }
  return [answerKey,counter].toString();
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log(
  'common("abca") === ["a", 2]: ' +
  (common('abca') === ['a', 2].toString())
);
console.log(
  'common("abbab") === ["b", 3]: ' +
  (common('abbab') === ['b', 3].toString())
);

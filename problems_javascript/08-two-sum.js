// Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `nil`.
//
// Difficulty: medium.

const twoSum = ( (indexArray) => {
  let answerArray = [];

  for (var i = 0; i < indexArray.length - 1; i++) {
    const currentNumber = indexArray[i];

    for (var j = i + 1; j < indexArray.length; j++) {
      const nextNumber = indexArray[j];

      if (currentNumber + nextNumber === 0) {
        answerArray.push(i,j);
      }
    }

  }

  // This is javaScripts way of creating a unique array.
  console.log('Not a unique array: ', answerArray);
  answerArray = [...new Set(answerArray)]; // <--- create unique array
  console.log('A unique array: ', answerArray);
  let answerJSON = JSON.stringify(answerArray);

  // console.log('The answer array looks like this: ',
  // JSON.stringify(answerArray) );

  if (answerJSON === '[]') return 'null';
  return answerJSON;

});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
  'twoSum([1, 3, 5, -3]) === [1, 3]: ' + (twoSum([1, 3, 5, -3]) === JSON.stringify([1, 3]))
);
console.log(
  'twoSum([1, 3, 5]) === null: ' + (twoSum([1, 3, 5]) === 'null')
);

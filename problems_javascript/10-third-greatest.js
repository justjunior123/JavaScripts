// Write a method that takes an array of numbers in. Your method should
// return the third greatest number in the array. You may assume that
// the array has at least three numbers in it.
//
// Difficulty: medium.

  const third = ( (array) => {
    let firstGreatest = null;
    let secondGreatest = null;
    let thirdGreatest = null;

    for (var i = 0; i <= array.length - 1; i++) {

      let current = array[i];
      if (current >= firstGreatest || firstGreatest === null) {
        thirdGreatest = secondGreatest;
        secondGreatest = firstGreatest;
        firstGreatest = current;
      } else if (current >= secondGreatest || secondGreatest === null) {
        thirdGreatest = secondGreatest;
        secondGreatest = current;
      } else if (current >= thirdGreatest || thirdGreatest === null) {
        thirdGreatest = current;
      }

    }
    console.log(thirdGreatest);
    return thirdGreatest;

  });

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
  'third([5, 3, 7]) === 3: ' +
  (third([5, 3, 7]) === 3).toString()
);
console.log(
  'third([5, 3, 7, 4]) === 4: ' +
  (third([5, 3, 7, 4]) === 4).toString()
);
console.log(
  'third([2, 3, 7, 4]) === 3: ' +
  (third([2, 3, 7, 4]) === 3).toString()
);

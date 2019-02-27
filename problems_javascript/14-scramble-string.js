// Write a method that takes in a string and an array of indices in the
// string. Produce a new string, which contains letters from the input
// string in the order specified by the indices of the array of indices.
//
// Difficulty: medium.

const scrambleString = ( (string, array) => {
  let answer = [];

  for (var i = 0; i <= array.length - 1; i++) {
    let scrambled = string[array[i]];
    answer.push(scrambled);
  }

  console.log(answer);
  return answer.join("");
});

// console.log(scrambleString("abcd", [3, 1, 2, 0]));
// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log(
  'scrambleString("abcd", [3, 1, 2, 0]) === "dbca": ' +
  (scrambleString("abcd", [3, 1, 2, 0]) === "dbca").toString()
);
console.log(
  'scrambleString("markov", [5, 3, 1, 4, 2, 0]) === "vkaorm"): ' +
  (scrambleString("markov", [5, 3, 1, 4, 2, 0]) === "vkaorm").toString()
);

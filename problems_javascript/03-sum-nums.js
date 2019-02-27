// Write a method that takes in an integer `num` and returns the sum of
// all integers between zero and num, up to and including `num`.
//
// Difficulty: easy.

// def sum_nums(num)
// end

const sum_nums = ( (num) => {
  let answer = 0;

  for (var i = 0; i <= num; i++) {
    answer = answer + i;
  }

  return answer;
});


// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('sum_nums(1) === 1: ' + (sum_nums(1) === 1).toString());
console.log('sum_nums(2) === 3: ' + (sum_nums(2) === 3).toString());
console.log('sum_nums(3) === 6: ' + (sum_nums(3) === 6).toString());
console.log('sum_nums(4) === 10: ' + (sum_nums(4) === 10).toString());
console.log('sum_nums(5) === 15: ' + (sum_nums(5) === 15).toString());

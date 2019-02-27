// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
//
// As a special case, `factorial(0) == 1`.
//
// Difficulty: easy.

// def factorial(n)
// end

const factorial = ((n) => {
  let answer = 1;
  console.log('what is n : ',n);
  if (n === 0) return 1;

  for (var i = 1; i <= n; i++) {
    console.log('ran i times: ',i);
    answer = answer * i;
  }
  console.log('This is the answer: ',answer);
  return answer;
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
  'factorial(0) === 1: ' + (factorial(0) === 1).toString()
);
console.log(
  'factorial(1) === 1: ' + (factorial(1) === 1).toString()
);
console.log(
  'factorial(2) === 2: ' + (factorial(2) === 2).toString()
);
console.log(
  'factorial(3) === 6: ' + (factorial(3) === 6).toString()
);
console.log(
  'factorial(4) === 24: ' + (factorial(4) === 24).toString()
);

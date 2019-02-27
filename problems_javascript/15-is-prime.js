// Write a method that takes in an integer (greater than one) and
// returns true if it is prime; otherwise return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
// More generally, if `m` and `n` are integers, `m % n == 0` if and only
// if `n` divides `m` evenly.
//
// You would not be expected to already know about modulo for the
// challenge.
//
// Difficulty: medium.

const divisible = ( (int1, int2) => {
  return (int1 % int2 === 0) ? true : false;
});

const isPrime = ( (integer) => {
  if (integer === 2) return true;

  let counter = 2;

  do {

    if (divisible(integer,counter) === true) {
      return false;
    }

    counter += 1;
  } while (counter < integer);

  return true;
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('isPrime(2) === true: ' + (isPrime(2) === true).toString());
console.log('isPrime(3) === true: ' + (isPrime(3) === true).toString());
console.log('isPrime(4) === false: ' + (isPrime(4) === false).toString());
console.log('isPrime(9) === false: ' + (isPrime(9) === false).toString());

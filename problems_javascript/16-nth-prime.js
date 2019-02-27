// Write a method that returns the `n`th prime number. Recall that only
// numbers greater than 1 can be prime.
//
// Difficulty: medium.
//
// You may use our `isPrime` solution.

// Helper function for finding a prime number --------------------------

const divisible = ( (int1, int2) => {
  return (int1 % int2 === 0) ? true : false;
});

const isPrime = ( (integer) => {
  if (integer <= 1) return false;
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
// ---------------------------------------------------------------------

const nthPrime = ( (integer) => {
  let counter = 0;
  let answer = [];

  do {
    if (isPrime(counter)) {
      answer.push(counter);
    }
    counter += 1;
  } while (answer.length !== integer);
  console.log(answer);
  return answer[integer - 1];
});



// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('nthPrime(1) === 2: ' + (nthPrime(1) === 2));
console.log('nthPrime(2) === 3: ' + (nthPrime(2) === 3));
console.log('nthPrime(3) === 5: ' + (nthPrime(3) === 5));
console.log('nthPrime(4) === 7: ' + (nthPrime(4) === 7));
console.log('nthPrime(5) === 11: ' + (nthPrime(5) === 11));

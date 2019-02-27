// Write a method that takes in a number and returns a string, placing
// a single dash before and after each odd digit. There is one
// exception: don't start or end the string with a dash.
//
// You may wish to use the `%` modulo operation; you can see if a number
// is even if it has zero remainder when divided by two.
//
// Difficulty: medium.

const isOdd = ( (number) => {
  if (number % 2 === 0) return false;

  return true;
});


const dasherizeNumber = ( (integer) => {
  let answer = [];
  let intToString = integer.toString().split("");
  console.log(intToString);



  for (var i = 0; i <= intToString.length - 1; i++) {
    let currentElement = parseInt(intToString[i]); //TURN CURRENT ELEMENT to type string;
    console.log('This is the current element',currentElement);

    if (isOdd(currentElement) && i === 0) {
      answer.push(currentElement + '-');
    } else if (isOdd(currentElement) && i === intToString.length - 1) {
      answer.push('-' + currentElement);
    } else {
      answer.push(currentElement);
    }

  }
  console.log('this is the answer', answer.join(""));
  return answer.join("");
});


// console.log(dasherizeNumber(123));
// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
  'dasherizeNumber(203) === "20-3": ' +
  (dasherizeNumber(203) === '20-3').toString()
);
console.log(
  'dasherizeNumber(303) === "3-0-3": ' +
  (dasherizeNumber(303) === '3-0-3').toString()
);
console.log(
  'dasherizeNumber(333) === "3-3-3": ' +
  (dasherizeNumber(333) === '3-3-3').toString()
);
console.log(
  'dasherizeNumber(3223) === "3-22-3": ' +
  (dasherizeNumber(3223) === '3-22-3').toString()
);

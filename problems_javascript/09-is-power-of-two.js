// Write a method that takes in a number and returns true if it is a
// power of 2. Otherwise, return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
//
// Difficulty: medium.

  const powerOfTwo = ( (input) => {
    if (input === 0) return false;
    // first we need to raise the number to base two power.
    let counter = 0;
    // store that value
    let storedValue = 0;
    // compare the stored value to modulo divided number
    do {
      storedValue = 2 ** counter;
      counter++;
    } while ( storedValue % input != 0 || storedValue <= input );
    // return true or false
    console.log("What is the stored value",storedValue);
    if ( storedValue % input === 0 ) {
      return true;
    } else {
      return false;
    }

  });
// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('powerOfTwo?(1) === true: ' + (powerOfTwo(1) === true).toString());
console.log('powerOfTwo?(16) === true: ' + (powerOfTwo(16) === true).toString());
console.log('powerOfTwo?(64) === true: ' + (powerOfTwo(64) === true).toString());
console.log('powerOfTwo?(78) === false: ' + (powerOfTwo(78) === false).toString());
console.log('powerOfTwo?(0) === false: ' + (powerOfTwo(0) === false).toString());
// -----------------------
// given :
//   - (list) elements - O(n)
//   - "almost sorted" := every element is at most k spots away from its sorted position
//   - k    i
//  in  0 1 2  3  4  5
// ex. [1,2,3, 5, 6, 4], k = 2
//             ^
// const sortedList = ( (elements) => {
//
//   for (let i = 0; i < elements.length - 1; i++) {
//     let current = elements[i];
//
//     for(let j = i + 1 ; j <= elements.length - 1; j++) {
//      let second = elements[j]
//
//      if( second < current ){
//        elements[i + 1] = second;
//        elements[j] = current;
//      }
//
//     }
//   }
//
//   return elements;
// });
//
// console.log(sortedList([1,2,3,5,6,4]));

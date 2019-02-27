// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.
//
// Difficulty: easy.

// def count_vowels(string)
// end

const count_vowels = ( (string) => {
  const vowels = ['a','e','i','o','u'];
  const stringToArray = string.split("");
  let count = 0;

  for (var i = 0; i <= stringToArray.length - 1; i++) {
    const currentLetter = stringToArray[i];
    if ( vowels.includes(currentLetter)) {
      count +=1;
    }
  }

  return count;
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('count_vowels("abcd") === 1: ' + (count_vowels('abcd') === 1).toString());
console.log('count_vowels("color") === 2: ' + (count_vowels('color') === 2).toString());
console.log('count_vowels("colour") === 3: ' + (count_vowels('colour') === 3).toString());
console.log('count_vowels("cecilia") === 4: ' + (count_vowels('cecilia') === 4).toString());

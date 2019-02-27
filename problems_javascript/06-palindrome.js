// Write a method that takes a string and returns true if it is a
// palindrome. A palindrome is a string that is the same whether written
// backward or forward. Assume that there are no spaces; only lowercase
// letters will be given.
//
// Difficulty: easy.

// def palindrome?(string)
// end

const palindrome = ( (string) => {
  let stringToArray = string.split("");
  let answer = "";

  if ( stringToArray.length === 1 ) return true ;

  const reversed = ( (stringToArray) => {
    for (var i = 0; i <= stringToArray.length - 1; i++) {
      answer = stringToArray[i] + answer;
    }
    console.log('What is the reversed string :',answer);
    return answer;
  });

  if (reversed(string) === string) {
    return true;
  } else {
    return false;
  }

});


// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('palindrome?("abc") === false: ' + (palindrome('abc') === false).toString());
console.log('palindrome?("abcba") === true: ' + (palindrome('abcba') === true).toString());
console.log('palindrome?("z") === true: ' + (palindrome('z') === true).toString());

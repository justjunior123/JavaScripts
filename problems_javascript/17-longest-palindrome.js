// Write a method that takes in a string of lowercase letters (no
// uppercase letters, no repeats). Consider the *substrings* of the
// string: consecutive sequences of letters contained inside the string.
// Find the longest such string of letters that is a palindrome.
//
// Note that the entire string may itself be a palindrome.
//
// You may want to use Array's `slice(start_index, length)` method,
// which returns a substring of length `length` starting at index
// `start_index`:
//
//     "abcd".slice(1, 2) == "bc"
//     "abcd".slice(1, 3) == "bcd"
//     "abcd".slice(2, 1) == "c"
//     "abcd".slice(2, 2) == "cd"
//
// Difficulty: hard.

// -------------helper function Is Palindrome?

const palindrome = ({

});

// -----------------
const longestPalindrom = ( (string) => {

});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
// puts(
//   'longestPalindrome("abcbd") == "bcb": ' +
//   (longestPalindrome('abcbd') == 'bcb').toString()
// )
// puts(
//   'longestPalindrome("abba") == "abba": ' +
//   (longestPalindrome('abba') == 'abba').toString()
// )
// puts(
//   'longestPalindrome("abcbdeffe") == "effe": ' +
//   (longestPalindrome('abcbdeffe') == 'effe').toString()
// )

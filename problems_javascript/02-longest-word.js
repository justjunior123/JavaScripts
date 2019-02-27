// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.
//
// Difficulty: easy.

// def longest_word(sentence)
// end

const longest_word = ( (sentence) => {
  let answer = [];
  const words = sentence.split(" ");

  for (var i = 0; i <= words.length - 1; i++) {
    answer = words[i];

    if ( answer.length <= words[i + 1]) {
      answer = words[i + 1];
    }

  }
  console.log('This is the answer :',answer);
  return answer;
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log(
  'longest_word("short longest") === "longest": ' +
  (longest_word('short longest') === 'longest').toString()
);
console.log(
  'longest_word("one") === "one": ' +
  (longest_word('one') === 'one').toString()
);
console.log(
  'longest_word("abc def abcde") === "abcde": ' +
  (longest_word('abc def abcde') === 'abcde').toString()
);

// Write a method that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// You'll want to use the `split` and `join` methods. Also, the String
// method `upcase`, which converts a string to all upper case will be
// helpful.
//
// Difficulty: medium.

const capitalizeWords = ( (sentence) => {
  let words = sentence.split(" ");
  // console.log("words array: ", words);

  const uppercase = words.map(word => {
    // console.log('This is the first word capitalized ',word[0].toUpperCase());
    // console.log("This is the substring: ",word.substring(1));
    word = word[0].toUpperCase()+ word.substring(1);
    // console.log("what does word look like",word);
    return word;

  });
  console.log(uppercase.join(" "));
  return uppercase.join(" ");
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log(
  'capitalizeWords("this is a sentence") === "This Is A Sentence": ' +
  (capitalizeWords("this is a sentence") === "This Is A Sentence").toString()
);
console.log(
  'capitalizeWords("mike bloomfield") === "Mike Bloomfield": ' +
  (capitalizeWords("mike bloomfield") === "Mike Bloomfield").toString()
);

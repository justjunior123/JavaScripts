// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

// def nearby_az(string)
// end

const nearbyAz = ( (string) => {
  const stringToArray = string.split("");

  for (var i = 0; i <= stringToArray.length - 1; i++) {
    const currentLetter = stringToArray[i];
    console.log("iterations : ", i);
    console.log('What is the sliced array: ',stringToArray.slice(i,i+4));
    if (currentLetter === 'a' && stringToArray.slice(i,i+4).includes('z')) {
      return true;
    }
  }

  return false;
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
console.log('nearbyAz("baz") === true: ' + (nearbyAz('baz') === true).toString());
console.log('nearbyAz("abz") === true: ' + (nearbyAz('abz') === true).toString());
console.log('nearbyAz("abcz") === true: ' + (nearbyAz('abcz') === true).toString());
console.log('nearbyAz("a") === false: ' + (nearbyAz('a') === false).toString());
console.log('nearbyAz("z") === false: ' + (nearbyAz('z') === false).toString());
console.log('nearbyAz("za") === false: ' + (nearbyAz('za') === false).toString());

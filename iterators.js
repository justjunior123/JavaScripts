// Iterators excercises ------------------------------------------------------------------------------------------------------------


const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


// The .forEach() Method --------------------------------------------------------------------------------------------------------------


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

const print = input => {
  console.log(`I want to eat a ${input}`)
}

fruits.forEach(fruit => {
  print(fruit)
})

// The .map() Method ---------------------------------------------------------------------------------------------------------------

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map( animal =>{
  return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];


const smallNumbers = bigNumbers.map( number => {
  return number / 100
})

// The .filter() Method -------------------------------------------------------------------------------------------------------------

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter( small => {
  return small < 250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter( word => {
  console.log(word)
  return word.length > 7
})

// The .filter() Method -----------------------------------------------------------------------------------------------------------------

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animal=> {
  return animal === "elephant"
})

const startsWithS = animals.findIndex(animal =>{
  return animal[0] === "s"
})

// The .findIndex() Method --------------------------------------------------------------------------------------------------------

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter( small => {
  return small < 250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter( word => {
  console.log(word)
  return word.length > 7
})

// The .reduce() Method ------------------------------------------------------------------------------------------------------------

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce( (accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
},10)
console.log(newSum)




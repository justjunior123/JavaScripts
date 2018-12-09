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


//---------------------------------------------------------------------------------------------------------------------------------------


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
const print = input => {
  console.log(`I want to eat a ${input}`)
}

fruits.forEach(fruit => {
  print(fruit)
})

//---------------------------------------------------------------------------------------------------------------------------------------

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map( animal =>{
  return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map( number => {
  return number / 100
})

//---------------------------------------------------------------------------------------------------------------------------------------

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter( small => {
  return small < 250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

//---------------------------------------------------------------------------------------------------------------------------------------
// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter( word => {
  console.log(word)
  return word.length > 7
})

//---------------------------------------------------------------------------------------------------------------------------------------

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animal=> {
  return animal === "elephant"
})

const startsWithS = animals.findIndex(animal =>{
  return animal[0] === "s"
})

//---------------------------------------------------------------------------------------------------------------------------------------

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce( (accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
},10)
console.log(newSum)

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter( word => {
  return word.length > 5
})

//---------------------------------------------------------------------------------------------------------------------------------------

console.log(interestingWords.every((word) => {
	return word.length > 5
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));


const longCities = cities.filter(city => city.length > 7);


const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);


nums.some(num => num < 0);
//---------------------------------------------------------------------------------------------------------------------------------------


// The For Loop ---------------------------------------------------------------------------------------------------------------------

for(let idx = 5; idx <= 10; idx ++){
  console.log(idx)
}

// Looping in Reverse ----------------------------------------------------------------------------------------------------------------

// The loop below loops from 0 to 3.
for (let counter = 3; counter >= 0; counter--){
  console.log(counter)
};


// Looping Through Arrays ------------------------------------------------------------------------------------------------------

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would like to visit ${vacationSpots[i]}`)
}

// Nested loops ---------------------------------------------------------------------------------------------------------------------

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// The While Loop ---------------------------------------------------------------------------------------------------------------------


const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard

while (currentCard !== 'spade'){
	currentCard = cards[Math.floor(Math.random() * 4)]
  console.log(currentCard)
}

// Do While Statements -----------------------------------------------------------------------------------------------------------

let cupsOfSugarNeeded = 2
let cupsAdded = 0

do {
  cupsAdded += 1
} while(cupsAdded < cupsOfSugarNeeded)
// The Break Keyword ---------------------------------------------------------------------------------------------------------------------

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let rapperArrayIndex = 0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++ ){
  if(rapperArray[rapperArrayIndex] === 'Notorious B.I.G.'){
     console.log(rapperArray[rapperArrayIndex])
     break
  }
  console.log(rapperArray[rapperArrayIndex])
}
console.log("And if you don't know, now you know.")


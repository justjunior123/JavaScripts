// Create an Array ---------------------------------------------------------------------------------------------------------------------

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Accessing Elements -------------------------------------------------------------------------------------------------------------

const hobbies = ['a','string','stings']

console.log(hobbies)

// Update Elements ---------------------------------------------------------------------------------------------------------------------

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'

// Arrays with Let and Const ---------------------------------------------------------------------------------------------------------------------

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'
condiments = ['Mayo']
utensils[3] = "Spoon" 
console.log(utensils)


// The .length Property --------------------------------------------------------------------------------------------------------
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length)

// the .push() Method ---------------------------------------------------------------------------------------------------------------------

const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('hey')
chores.push('a')
console.log(chores)

// the .pop() Method ---------------------------------------------------------------------------------------------------------------------
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores.pop()

console.log(chores)

// More Array Methods -------------------------------------------------------------------------------------------------------------
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
groceryList.unshift('popcorn')
console.log(groceryList.slice(1,4))
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

console.log(groceryList)

// Arrays and Functions ------------------------------------------------------------------------------------------------------------

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)

removeElement = (newArr) => {
  newArr.pop()
}

removeElement(concept)
console.log(concept)

// Nested Arrays ------------------------------------------------------------------------------------------------------------

const numberClusters = [[1,2],[3,4],[5,6]]

const target = numberClusters[2][1]




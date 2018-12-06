/*
let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}

*/
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
// ****************************************************************************************************************************************

// initialize object construction
class Surgeon {
  constructor(name,department) {
    this.name = name;
    this.department = department;
  }
}

// ****************************************************************************************************************************************
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
//Create new instances of the the class surgeon
const surgeonCurry = new Surgeon('Curry','Cardiovascular')

const surgeonDurant = new Surgeon('Durant','Orthopedics')

// ****************************************************************************************************************************************
// playing with class methods
class Surgeon {
  constructor(name,department) {
    this._name = name; // use getter setter
    this._department = department;//use getter setter
    this._remainingVacationDays = 20;
  }
  // NO COMMAS!!!!
  get name(){  // return name with class method
    return this._name;
  }
  
  get department(){
    return this._department;
  }
  
  get remainingVacationDays(){
  	return this._remainingVacationDays;
  }
  //subtract daysOff from remaining
  takeVacationDays(daysOff){
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
surgeonCurry.takeVacationDays(3)
console.log(surgeonCurry.remainingVacationDays)

// ****************************************************************************************************************************************
// Create class inheritance using constructor function and super props
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name,certifications){
    super(name)
    this._certifications = certifications
  }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma','Pediatrics'])


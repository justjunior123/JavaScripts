// Higher Order Functions -----------------------------------------------------------------------------------------------------------------

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes

is2p2()

console.log(is2p2.name)

//---------------------------------------------------------------------------------------------------------------------------------


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(
checkThatTwoPlusTwoEqualsFourAMillionTimes
)

const checkConsistentOutput = (func,val) => {
  let firstCallback = func(val);
  let secondCallback = func(val);
  if(firstCallback === secondCallback){
		return firstCallback;
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(addTwo,3)


// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
//
// Difficulty: easy.
//
// def time_conversion(minutes)
// end

const time_conversion = ((minutes) => {
  let hours = 0;

  while (minutes >= 60) {
    hours += 1;
    minutes = minutes -= 60;
  }

  let numToString = ((hours) => {
    return hours.toString();
  });

  let minToString = ( (minutes) => {
    let minString = '';

    if (minutes >= 10) {
      minString = minutes.toString();
    } else {
      minString = '0' + minutes.toString();
    }

    return minString;
  });

  return numToString(hours) + ':' + minToString(minutes);
  
});

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
//
console.log('time_conversion(15) == "0:15": ' + (time_conversion(15) == '0:15').toString());
console.log('time_conversion(150) == "2:30": ' + (time_conversion(150) == '2:30').toString());
console.log('time_conversion(360) == "6:00": ' + (time_conversion(360) == '6:00').toString());

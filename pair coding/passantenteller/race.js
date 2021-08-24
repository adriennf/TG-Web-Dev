// Setting up the the race   

console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);

// GO! 
// Players are running the race  
// Race is finished!


// Get ready for a new race   

// -------------------------------------------

// other word for function is command
function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

// Setting up the the race   

countdown();

// GO! 
// Players are running the race  
// Race is finished!


// Get ready for a new race   

countdown();

// ----------------------------------------------

function invokeFunc() {
  console.log(42);
}
invokeFunc();

// --------------------------------------------

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times

function sumLapTime() {
  // when you define a let variable inside of this scope,
  // it only exists inside of this block of code.
  // This is the scope in which the function lives.
  // And that's why we call let variables block scoped

  let totalTime = lap1 + lap2 + lap3;
  // while this function could access these variables,
  // from the so called global scope, the outer scope,
  // which is not on the inside of the function,
  // but on the outside of it, this doesn't work
  // the other way around
  console.log(totalTime);

  // console.log(lap1 + lap2 + lap3) Alternatively, I could have skipped creating this variable in here.
  // And simply added the variables inside of the console log
  // that will give me as you can see the exact same result
}
sumLapTime();

// console.log(totalTime);
// let's try to console log total time, from the outer scope.
// If we run this gets a total time is not defined. That is because when you define a let variable
// inside of this scope, it only exists inside of this block of code

let lapCompleted = 0;

// Create a function that increments the lapCompleted with one
// Run it three times

function incrementLap() {
  lapCompleted = lapCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapCompleted)


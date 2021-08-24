// document.getElementById("count-el").innerText = 5

// ------------------------------------

// let count = 0
// console.log(count)

// --------------------------------

// Create a variable, myAge, and set its value to your age
// let myAge = 22
// console.log(myAge)

// ---------------------------

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// --------------------------------------

// let myAge = 22
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// -------------------------------

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = 100
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// ----------------------------

// function increment() {
// this is the body of the function. 
// that piece of code in the body will be executed, every time function is called.
// every single time the button is clicked, this code runs. It runs 'cause in the HTML we're saying, JS, when this button is clicked on the click event, I want u to run a function called increment. 
//   console.log("The button was clicked");
// }

// --------------------------------------------------

// increment on clicks
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let count = 0

// function increment() {
//     // console.log("clicked")
//     count = count + 1
//     console.log(count)
// }

// display the count

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }


// there's one thing I want to mention, which is that this get element by ID here. And this dot log,
// both are functions in the same way, our increment function is a function. Now they are
// hooked on to the document object and the console object. 
// They're still functions or methods as we call functions that are hooked on to so called objects

// -------------------------------------------------

let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}

console.log("Visitors today")



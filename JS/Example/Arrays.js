// om meerdere variabelen bij elkaar te groeperen, als een lijstje
// let emptyArray = []
// let filledArray = [1, 2, 3, 4, 5]
// console.log(filledArray) //toont het hele Array
// console.log(filledArray[0]) //toont het eerste item

let theMatrix = ["The Matrix", "The Matrix Reloaded", "The Matrix Revolution"]
let johnWick = ["John wick", "John Wick 2", "John Wick 3"]
let favorite = "Much Ado About Nothing"
let age = 56
let keanuRating = 84 //Imdb

let keanuMovies = [theMatrix, johnWick, favorite, keanuRating, age]

console.log(keanuMovies) //toont het hele Array, inclusief subarrays
console.log(keanuMovies[0][2]) //toont "The Matrix Revolutions"

// Net zoals Strings zijn Arrays stiekem ook Objects. Dat betekent dat het ook de length property en built-in methods kan gebruiken. 



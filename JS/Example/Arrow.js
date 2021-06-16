function sum(a, b) {
    return a + b 
}
let sum2 = (a, b) => a+b 


function isPositive(number) {
    return number >= 0
}
let isPositive2 = number => number >= 0


function randomNumber() {
    return Math.random
}
let randomNumber2 = () => Math.random


document.addEventListener('click', function() {
    console.log('Click')
})
document.addEventListener('click', () => console.log('Click'))


function calculate(value) {
    return value + 3;
}
let plusThree = calculate
console.log(plusThree(2))

let plusThree = value => value + 3;
console.log(plusThree(2))


// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow: ' + this.name)
//         }, 100)
//     }
// }

// let person = new Person('Bob')
// person.printNameArrow()
// person.printNameFunction()
// console.log(this.name)

// Arrow: Bob
// Function:
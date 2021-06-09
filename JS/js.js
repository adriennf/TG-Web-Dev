//Intro
//alert('Hello World');
//logt: Hello World
//console.log("Hello");  //an example of a statement
//logt: Hello
//var CAPSLOCK = 'Hoofdletters';
//console.log(CAPSLOCK);
//var capslock = 'Geen Hoofdletters';
//console.log(capslock);
//let camelCasedVariable = 'Text!'
//console.log(typeof camelCasedVariable);
//string

// Variables&Datatypes

// Opdracht 1.1 Schrijf eerst je verwachtingen op

// a, Let Tekst Twee
// let letOefening = 'Let Tekst';
// let letOefening = 'Let Tekst Twee';
// console.log(letOefening)
// SyntaxError: Identifier 'letOefening' has already been declared

// b, Let Tekst
// Let Tekst Twee
//   let letOefening = 'Let Tekst';
//   console.log(letOefening)

//   letOefening = 'Let Tekst Twee'; 
//   console.log(letOefening)
// Do NOT create global variables unless you intend to. If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable

// c, ?
// const constOefening = 'Const Tekst';
// console.log(constOefening)
//  constOefening = 'Const Tekst Twee!';
//  console.log(constOefening)
// js.js.:35 Const Tekst
// js.js:36 Uncaught TypeError: Assignment to constant variable: Een constante is een waarde die tijdens de normale uitvoering niet door het programma kan worden gewijzigd. Het kan niet worden gewijzigd door middel van een nieuwe toewijzing en het kan niet opnieuw worden aangegeven. In JavaScript worden constanten gedeclareerd met het const-sleutelwoord.

// d, error
//  varOefening = 'Var Tekst';
//  console.log(varOefening)
// var varOefening = 'Var Tekst Twee!';
//  console.log(varOefening);
// var varOefening = 'Var TekstDrie';
// console.log(varOefening)
// Var Tekst
// Var Tekst Twee!
// Var TekstDrie

// Opdracht 1.2 Datatypes

// a,
// let typeQuestion = 'Number'
// console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
// This is a string, with the value: Number

// b/1,
// let typeQuestion = 'True'
// console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
// This is a string, with the value: True

// b/2,
// let typeQuestion = 'False'
// console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  his is a string, with the value: False

// b/3,
// let typeQuestion = 'Undefined'  //als je ‘= “Number”’ in zijn geheel weghaalt doet dat hetzelfde
// console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
// This is a string, with the value: Undefined

//  b/,
//  let typeQuestion = '22'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: 22

//  b/,
//  let typeQuestion = '22n'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: 22n

//   b/6,
//  let typeQuestion = 'Symbol()'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: Symbol()

//  b/7,
//  let typeQuestion = 'Null'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: Null

// b/8,
//  let typeQuestion = '{}'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: {}

// b/9,
//  let typeQuestion = 'new Object()'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: new Object()

// b/10,
//  let typeQuestion = 'function calculateSomething() {}'
//  console.log('This is a '+ typeof typeQuestion + ', with the value: '+ typeQuestion)
//  This is a string, with the value: function calculateSomething() {}

// Opdracht 1.3

// let somenumber = 5;
// let anotherNumber = '5';
// console.log(somenumber + anotherNumber)

// c, 55

// d, Wat komt er uit als je van beiden een number maakt?
// let somenumber = 5;
// let anotherNumber = 5;
// console.log(somenumber + anotherNumber)
// 10

// e, Wat komt er uit als je de + vervangt door
// e/1,
//  let somenumber = 5;
//  let anotherNumber = '5';
//  console.log(somenumber == anotherNumber)
// true, gelijke waarde

// e/2,
// let somenumber = 5;
// let anotherNumber = '5';
// console.log(somenumber === anotherNumber)
// false, gelijke waarde en gelijk datatype

// e/3,
// let somenumber = 5;
// let anotherNumber = '5';
// console.log(somenumber != anotherNumber)
// false, ongelijke waarde

//  e/4,
//  let somenumber = 5;
//  let anotherNumber = '5';
//  console.log(somenumber !== anotherNumber)
//  true, ongelijke waarde OF ongelijk datatype

// Opdracht 1.4 Operators

// a, The increment operator (++) increments (adds one to) its operand and returns a value
// let increment = 1;
// console.log(++increment)
// console.log(increment++)
// 2 the increment operator increments and returns the value after incrementing
// Pre Increment, because it increments 1's value by 1 before the operation.
// 2 the increment operator increments and returns the value before incrementing
// Post Increment, because it increments 1's value by 1 after the operation is over.

// https://stackoverflow.com/questions/24853/what-is-the-difference-between-i-and-i

// b,
// let increment = 1;
// console.log(increment++)
// console.log(++increment)
// 1
// 3

// c,
// let modulo = 24 % 10;
// console.log(modulo)
// 4

// let division = 24 / 10;
// console.log(division)
// 2.4

// d,
// let someNumber = 'Tekst';
// console.log(!someNumber)
// false

// e/1,
// let someNumber = 5;
// console.log(!someNumber)
// false

// e/2,
// let someNumber = Boolean;
// console.log(!someNumber)
// false

// e/3,
// let someNumber = false;
// console.log(!someNumber)
// true

// e/4,
// let someNumber = "false";
// console.log(!someNumber)
// false

// e/5,
// let someNumber = true;
// console.log(!someNumber)
//  false

// e/6,
// let someNumber = 'true';
// console.log(!someNumber)
// false

// e/7,
// let someNumber = null;
// console.log(!someNumber)
// true

//  e/8,
//  let someNumber = undefined;
//  console.log(!someNumber)
//  true, ! Logical NOT operator.

// f, Zoek op of experimenteer wat += doet. Werkt deze ook met Strings? Weet je hoe je deze anders kan schrijven?
// MDN
// let a = 2;
// let b = 'hello';

// console.log(a += 3); // addition, a += b -> a = a + b
// expected output: 5

// console.log(b += ' world'); // concatenation
// expected output: "hello world"

// g, Doe hetzelfde voor -=, *=, /=, %= en **=.

// a -= b -> a = a - b
// let a = 2;

// console.log(a -= 3);
// // expected output: -1

// console.log(a -= 'Hello');
// expected output: NaN

// a *= b -> a = a * b
// let a = 2;

// console.log(a *= 3);
// // expected output: 6

// console.log(a *= 'hello');
// expected output: NaN

// a /= b -> a = a / b
// let a = 3;

// console.log(a /= 2);
// // expected output: 1.5

// console.log(a /= 0);
// // expected output: Infinity

// console.log(a /= 'hello');
// expected output: NaN

// a %= b -> a = a % b
// let a = 3;

// console.log(a %= 2);
// // expected output: 1

// console.log(a %= 0);
// // expected output: NaN

// console.log(a %= 'hello');
// expected output: NaN

// x **= y -> x = x ** y raises the value of a variable to the power of the right operand.
// let a = 3;

// console.log(a **= 2);
// // expected output: 9

// console.log(a **= 0);
// // expected output: 1

// console.log(a **= 'hello');
// // expected output: NaN


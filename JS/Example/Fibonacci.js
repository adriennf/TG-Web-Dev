// let i;
// let fib = []; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 50; i++) {
//   // Next fibonacci number = previous + one before previous
//   // Translated to JavaScript:
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }
// https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence

// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

function sumFibonacci(){
  return fibSeries().reduce(function(total, item) {
      return total += item;
  }, 0);
}
function fibSeries() {
  var a = 1;
  var b = 2;
  var next = a + b;
  var fibonacciArray = [2];
  while(next < 4000000){
      if(next % 2 === 0){
          fibonacciArray.push(next);
      }
      a = b;
      b = next;
      next = a + b;
  }
  return fibonacciArray;
}



// // start

// function sumFibonacci(){
//   return fibSeries().reduce(function(total, item) {
//       return total += item;
//   }, 0);
// }
// function fibSeries() {
//   var a = 1;
//   var b = 2;
//   var next = a + b;
//   var fibonacciArray = [2];
//   while(next < 4000000){
//       if(next % 2 === 0){
//           fibonacciArray.push(next);
//       }
//       a = b;
//       b = next;
//       next = a + b;
//   }
  
// }
// console.log(fibonacciArray)


// ------------------------------------------------

// let fib = [0, 2];

// for(let i = 2; fib[i-1] < 4000000; i++) {
//     fib[i] = 4 * fib[i - 1] + fib[i - 2];
// }
// fib.pop()

// let sum = fib.reduce((a, c) => a + c, 0);

// console.log(sum);
// // [log]4613732

// --------------------------------------

let fib = [0, 1]
        let sum = 0;
        while (true) {
            let i = fib[fib.length - 2] + fib[fib.length - 1]
            fib.push(i)
            if (i % 2 === 0) sum += i
            if (i >= 4000000) break;
        }
        console.log(sum)
        console.log(fib)


        // -----------------------------------------

//         let vorigNR = 0;
// let huidigNR = 1;
// let Som = 0;
// let volgendNR;

//for loop
// for (i = 1; i < 100; i++) {
//   volgendNR = huidigNR + vorigNR;
//   vorigNR = huidigNR;
//   huidigNR = volgendNR;

//   if (huidigNR % 2 === 0 && huidigNR < 4000000) {
//     Som += huidigNR;
//   }
// }
// console.log(Som);

// ---------------------------------------------

// var x = 0,  y = 1, sum, i , einde; 

// for ( i = 1; i <= 36; i++){

// if (x%2==0)

// console.log(x)
//     sum = x + y 
      
//     x = y;  
//     y = sum; 

//     einde= sum + y ;
   
    
// }  
// console.log(einde)

// ---------------------------------------------

// let series = [0, 1]


// for (i=0; i<50; i++) {
//     nextNumber = series[i] + series[i+1]
//     series.push(nextNumber)
// }
// console.log(series)

// let evenFibonacci = []

// for (j=0; j<series.length; j++) {
//     if(series[j] % 2 === 0 && series[j] <= 4000000) {
//         evenFibonacci.push(series[j])
//     }
// }

// const sum = evenFibonacci.reduce((a, b) => a + b, 0);
// console.log(sum)


// ------------------------------------------------
        
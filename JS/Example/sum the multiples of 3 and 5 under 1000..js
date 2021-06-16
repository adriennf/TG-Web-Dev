// Als je een lijst maakt van alle getallen onder de 10 die een meervoud zijn van 3 of 5 krijg je 3, 5, 6 en 9. De optelsom van deze getallen is 23.
// Geef de optelsom van alle getallen onder de 1000 die een meervoud van 3 of 5 zijn.
let sum = 0;
for(let i = 0; i < 1000; i++){
  // console.log(i);
  if(i%3 == 0 || i%5 == 0){
    //sum = sum + i;
    sum += i;
  }
}
console.log(sum);
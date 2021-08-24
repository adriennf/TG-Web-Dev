
// stackoverflow
function largestPalindrome(){

    let arr = [];    
    for(let i =999; i>100; i--){
        for(let j = 999; j>100; j--){
            let mul = j*i;
            if(isPalin(mul)){
                arr.push(j * i);
            }
        }
    }
  
    return Math.max.apply(Math, arr);
  }
  
  function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
  }
  
  console.log(largestPalindrome());
// 906609

// Kim Sing's
function findHighestPalindroom() {
    let highestPalindroom = 0;
    for (let i = 999; i > 100; i--) {
        for (let j = 999; j > 100; j--) {
            const result = i * j; // first calculation is 999 * 999 = 998001
            const resultInString = result.toString(); // convert to string to be able to loop through each number "998001" 
            //find palindroom
            let isPalindroomNumber = true;
            for (let k = 0; k < resultInString.length - 1; k++) {
                // compare  two numbers to see if it's the same. If it's not the same, than it's not a palindroom.
                if (!(resultInString[k] === resultInString[resultInString.length - 1 - k])) {
                    isPalindroomNumber = false;
                    break;
                }
            }
            if (isPalindroomNumber && highestPalindroom < result) {
                highestPalindroom = result;
            }
        }
    }
    return highestPalindroom;
}
console.log(findHighestPalindroom());

// Jen's

  // Als je op 906609 uitkwam, had je het goed!
        // Hieronder mijn code en stappen die ik heb doorlopen.
        ​
        // Eerst moet ik voor een getal kunnen bepalen of het een palindroomgetal is
​
        // Daarvoor wil ik van een gegeven getal de eerste + laatste vergelijken
        // Daarna de tweede + een na laatste etc.
        // Als het getal een oneven lengte heeft (bijv 90109) dan maakt het middelste getal niet uit.
​
        function isPalindrome(input) {
            // Ik kan niet gelijk met input.length kijken hoeveel getallen er in mijn input zitten.
            // Door er een string van te maken kan ik dat wel
            input = String(input)
​
            // Hoe vaak moet ik getallen gaan vergelijken? 
            // Bij lengte 5 moet het bijvoorbeeld 2 zijn
            // Dus ik pak de helft van de lengte en rond die naar beneden af.
            let runtime = Math.floor(input.length / 2)
​
            // Nu moet ik berekenen of iets wel of niet een palindroom is
            // Ik begin met "wel waar" en als het niet waar is verander ik dit.
            let palindrome = true
​
            // Nu moet ik herhaaldelijk gaan vergelijken
            // Ik probeerde het eerst met alleen eerste en laatste!
            // input.charAt(0) === input.charAt(input.length - 1)?
​
            // Daarna breidde ik het uit met een for loop
            for (let index = 0; index < runtime; index++) {
                if (!(input.charAt(index) === input.charAt(input.length - (index + 1)))) {
                    // Hier komt hij binnen als ze NIET gelijk zijn.
                    // Dan zetten we palindrome op false en stoppen we de loop
                    // Bij een palindroomgetal, bijv. 9009, komt hij hier nooit binnen.
                    palindrome = false;
                    break;
                }
            }
            // Hier zorg ik dat de waarde wordt teruggegeven, zodat ik die ook ergens anders kan gebruiken.
            return palindrome;
        }
        // Nu controleer ik of mijn isPalindrome() functie werkt zoals verwacht
        // console.log(isPalindrome(9009))
        // console.log(isPalindrome(900))
        // console.log(isPalindrome(90509))
​
        // Nu moet ik getallen gaan doorzoeken om te kijken of ze een palindroom zijn.
        // Als je het grootste getal van 2 cijfers wil, tel je af vanaf het maximum: 99 x 91
​
        // Je kan nu 2 kanten op:
        // 1 getal decrementen en de andere op 99 laten.
        // 2 getallen tegelijk decrementen.
        // Hoe weet je welk resultaat groter is?
​
        // We laten de computer het voor ons berekenen.
        // Als we eerst 1 getal van 99 x 99 naar 99 x 1 doen
        // Daarna 98 x 98 naar 98 x 1 etc.
        // Dan komen we alle combinaties langs.
​
        // Ik begin dus met 1 tegelijk decrementen
        function decrementOne(numberOne, numberTwo) {
            // Ik weet niet wanneer het gaat stoppen
            // Dus ik gebruik while(true)
            while (true) {
                // Vermenigvuldig de parameters en geef hett resultaat
                let outcome = numberOne * numberTwo
                // Is het een palindroom?
                if (isPalindrome(outcome)) {
                    // De functie stopt en geeft het palindroomgetal terug.
                    return outcome
                    // Als de functie door zou gaan, zou hij na 91 x 99 bijv. 90 x 99 proberen
                    // Maar zelfs als dat een palindroom is, kan het niet groter zijn.
                    // Daarom lekker returnen om de functie te stoppen.
                }
                // Is het geen palindroom? Dan decrement je 1 getal.
                numberTwo--
                // En omdat het een while loop is, kijkt hij daarna door.
            }
        }
        // Nu test ik mijn functie.
        // console.log(decrementOne(99, 99))
        // Toont dit 9009 zoals ik verwacht?
​
        // Nu moet ik nog rekening houden met 98 x 98 en lager.
        function decrementBoth(numberOne, numberTwo) {
            // Eerst kijken wat het resultaat is van startwaarde,
            let largestDecremented = decrementOne(numberOne, numberTwo)
            while (numberOne > 1) {
                // Zolang de getallen boven de 1 zijn zal dit draaien.
                numberOne--
                numberTwo--
                // Beiden een keer decrementen - de laatste waardes worden beiden 0.
                // Hogere waardes zoals 98 x 99 zijn eerder al gedekt!
                // Nu gaan we 98 x 98 tot 98 x 1 controleren op het grootste palindroomgetal
                let newResult = decrementOne(numberOne, numberTwo)
                // Is dat getal groter dan onze vorige grootste?
                // Dan wordt de grootste gelijk aan dit nieuwe resultaat.
                if (newResult > largestDecremented) largestDecremented = newResult
            }
            return largestDecremented
        }
        // Dit is al genoeg om het antwoord te vinden
        // console.log(decrementBoth(999, 999))
        // Toch wil ik het wat mooier hebben: dat staat hieronder
​
        const input = document.querySelector('input')
        const display = document.querySelector('#answer')
​
        function calculate(event) {
            let value = event.target.value
            console.log(value)
            // Mijn pc vindt hele grote getallen niet zo leuk
            // We valideren de input
            if (value < 1) value = 1
            if (value > 4) value = 4
            let startValue = ''
            for (let i = 0; i < value; i++) {
                startValue += 9
            }
            console.log(startValue)
            display.innerText = decrementBoth(startValue, startValue)
        }
        
        input.onchange = calculate;

        // Maher's

        let c = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
            let m = i * j
            let p1 = String(m).slice(0, 3)
            let p2 = String(m).slice(3)
            if (p1[0] == p2[2] && p1[1] == p2[1] && p1[2] == p2[0]) {
                if( m > c ) c = m
            }
        }
    }
console.log(c)

// Mitchell's

function grootsePalim() {
    let max = 0;
    for (let i = 999; i > 100; i--) {
       for (let j = i; j > 100; j--) {
          let mul = j * i;
          if (isPalim(mul) && mul > max) {
             max = i * j;
          }
       }
    }
    return max;
 }
 function isPalim(i) {
    i = '' + i;
    return i === i.split("").reverse().join("");
 }
 console.log(grootsePalim());

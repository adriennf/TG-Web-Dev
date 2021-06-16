// Loops zijn een manier om code meerdere keren te laten uitvoeren. 
// For Loop

for (let i=0; i < 5; i++) {
    console.log("i is hier " + i)
}
// [Log] i is hier 0 
// [Log] i is hier 1 
// [Log] i is hier 2 
// [Log] i is hier 3 
// [Log] i is hier 4 

// let i=0 - Een variabele i(iterator) wordt gedeclareerd en de waarde 0 gegeven de initialisatie
// i < 5 - Die variabele wordt geëvalueerd naar true/false: de conditie
// i++ - Een actie die wordt uitgevoerd aan het einde van elke loop - de final expression
// console.log() - De actie(s) die de loop moet uitvoeren heten ook wel een statement

// For .. In Loop & For … Of Loop

let array = ["Blink", 182]
for (const index in array) {
    console.log(index)
}
// [Log] 0 
// [Log] 1 

let array2 = ["Blink", 182]
for (const item of array2) {
    console.log(item)
}
// [Log] Blink 
// [Log] 182 

// While Loop 

// let bugsInCode = true;
// while (bugsInCode) {
//     fixBugs()
//     if(needSleep) break;
// }

// Zo lang die conditie waar blijft wordt de statement herhaaldelijk uitgevoerd. 
// het keyword break stopt de hele loop
// het keyword continue stopt de huidige iteratie en gaat met de volgende verder

// let bugsInCode2 = 1;
// while (bugsInCode2 > 0) {
//     console.log(bugsInCode2)
//     bugsInCode2 += 2
//     if(bugsInCode2 == 3) continue;
//     bugsInCode2 -= 1
//     if(needsleep) break;
// }
// ReferenceError: Can't find variable: needsleep

// Do … While Loop
// hetzelfde als een while loop, maar dan voert hij de actie minimaal 1 keer uit - zelfs als de conditie onwaar is

// let writesBadCode = false;
// do {
//     writesBadCode()
// } while (writesBadCode);

// TypeError: writesBadCode is not a function. (In 'writesBadCode()', 'writesBadCode' is false)






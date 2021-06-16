// shift() en pop() verwijderen het eerste en laatste item
// unshift() en push() voegen een item toe op de eerste/laatste plek

// let pets = ['Bird', 'Dog', 'Cat']
// console.log(pets.shift() + ' escaped!') //Bird escaped!
// console.log(pets.pop() + ' escaped!') //Cat escaped!
// console.log(pets) //["Dog"] (1)
// console.log(pets.unshift('Bird')) // toont 2, de lengte van het nieuwe array
// console.log(pets.push('Cat'))  // toont 3, de lengte van het nieuwe array
// console.log(pets) //["Bird", "Dog", "Cat"] (3)

let pets = ['Bird', 'Dog', 'Cat']
let outdoorPets = pets.slice(1, 3) // slice(start?: number, end?: number): string[]
// slice() kopieert een array vanaf een bepaalde index waarde (hier 1). slice() kan ook een 2e parameter mee krijgen.
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
pets.splice(1, 2, 'Cat', 'Dog')
// splice() verwijdert items vanaf een bepaalde index (hier 1), voor een bepaalde hoeveelheid items (hier 2) en vervangt deze met de overige items (Cat, Dog). Effectief sorteert dit het array dus alfabetisch. De laatste 3 parameters zijn allemaal optioneel.

outdoorPets.sort()
// sort() sorteert een array. Je kan deze een functie als parameter meegeven als je op een specifieke manier wil sorteren.

pets.forEach(pet => pet = 'My favourite ' + pet)
outdoorPets = outdoorPets.map(pet => pet = 'My favourite ' + pet)
// forEach() en map() doen bijna hetzelfde - ze voeren beiden een functie uit op elk item in een array. Het verschil is dat forEach() het gebruikte array zelf aanpast, map() doet dat niet, en geeft het resultaat in plaats daarvan terug als een nieuw array. 

console.log(outdoorPets)


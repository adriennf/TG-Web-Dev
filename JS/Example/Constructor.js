// Object Constructor

let objectConstructed = new Object();
objectConstructed.name = "Jens"
objectConstructed.age = "28"
objectConstructed.country = "Nederland"
objectConstructed.city = "Adam"

//  Literal Constructor

let literallyConstructed = {
    name : "Jens",
    age : "28",
    country : "Nederland",
    city : "Adam"

}

// Function Constructor

function Person(name, age, country, city) {
    this.name = name
    this.age = age
    this.country = country
    this.city = city
}
let functionConstructed = new Person("Jens", "28", "Nederland", "Adam")

// Singleton Constructor

let singletonConstructed = new function() {
    this.name =  "Jens",
    this.age = "28",
    this.country = "Nederland",
    this.city = "Adam"
    
}
console.log(singletonConstructed)

// Class-based Constructor

class Person2 {
    constructor(name, age, country, city) {
        this.name =  "Jens",
        this.age = "28",
        this.country = "Nederland",
        this.city = "Adam"   
    }
    writeBadCode() {
        console.log("Foutje")
    }
}
let classConstructed = new Person2("Jens", "28", "Nederland", "Adam")

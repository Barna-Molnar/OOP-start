'use strict'
const Person = function(firstName, birthYear) {
    // Instance properties 
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this  
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear)
    // };

}

const barni = new Person("Barni", 1990);
console.log(barni)
    // 1. New {} empty object is created
    // 2. function is called , this = {}
    // 3. { } linked to prototype
    // 4. { } autamitacally returned {}

const matilda = new Person("Matilda", 1991)
console.log(matilda)
const mario = new Person("Mario", 1995)
console.log(mario)
const jay = "Jay"
console.log(barni instanceof Person)
console.log(jay instanceof Person)


console.log(Person.prototype)

// Prototypes <= adding methods to the prototype avoiding code duplicating 
Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear)
};

barni.calcAge();
mario.calcAge();

console.log(barni.__proto__);
console.log(barni.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(barni))
console.log(Person.prototype.isPrototypeOf(mario))
console.log(Person.prototype.isPrototypeOf(Person)) // <= false

Person.prototype.species = "Homo Sapiens";
console.log(barni.species, mario.species);

console.log(barni.hasOwnProperty("firstName"))
console.log(barni.hasOwnProperty("species")) // <= 'cos inherited property is not its own property, it has acces to it


// Ptototype chain 
console.log(barni.__proto__)
    //Object of prototype (this is top of the prototype chain)
console.log(barni.__proto__.__proto__)
console.log(barni.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor);

const arr = [1, 2, 30, 20, 20, 30, 80] // shorthand [] === new Array
console.log(arr.__proto__)

Array.prototype.unique = function() {
    return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.querySelector("h1");
// console.dir(x => x + 1)

// Practicing

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
}
Car.prototype.accelerate = function() {
    this.speed = (10 + this.speed)
    console.log(`${this.speed}km\\h`)
}

Car.prototype.breake = function() {
    this.speed = (this.speed - 5)
    console.log(`${this.speed}km\\h`)
}
const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)
bmw.accelerate()
bmw.accelerate()
bmw.breake()

console.log(mercedes.speed)
mercedes.accelerate()
mercedes.breake()
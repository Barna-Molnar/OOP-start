'use strict';

const Person = function(first, birthYear) {
    // Instance properties 
    this.first = first;
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
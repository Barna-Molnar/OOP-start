'use strict';
////////////////////////////
///// Classes in JS ///////
////////////////////////////

// 1, Classes are NOT hoisted 
// 2, Class are first-class citizens
// 3, Classes are executed in stict mode

//Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;

        }
        // Methods will be added to .prototype property and it has to be out of the constructor() 'insrance method
    calcAge() {
        console.log(2021 - this.birthYear)
    }
    greet() {
            console.log(`Hey ${this.firstName}`)
        }
        // creating static mehtod 
    static helo() {
        console.log("helo there 😎")
    }

}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`)
// }

// Challenge #2

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed = (10 + this.speed)
        console.log(`${this.speed}km\\h`)
    }
    breake() {
        this.speed = (this.speed - 5)
        console.log(`${this.speed}km\\h`)
    }
    get speedUS() {
        return `The ${this.make} is going with ${this.speed / 1.6} mi/h`
    }

    set speedUS(num) {
        this.speed = num * 1.6


    }

}
const ford = new CarCl("FORD", 120);

console.log(ford)
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford)
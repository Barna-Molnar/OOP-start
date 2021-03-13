'use strict';
//Coding Challenge #3
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function() {
    this.speed = 10 + this.speed;
    console.log(`${this.make} is going at ${this.speed}km\\h`);
};

Car.prototype.breake = function() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed}km\\h`);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};
// Linking the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};
EV.prototype.accelrate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
    );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelrate();
tesla.accelrate();
tesla.chargeBattery(88);
tesla.accelrate();
tesla.breake();

// Practicing #2

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
'use strict';

/// Another Class example

// 1, Public fields
// 2, Private fields
// 3, Public method
// 4, Private method

class Account {
    // Public fields (instances)
    locale = navigator.language;
    _movements = [];

    //Private fields
    // it does not work
    // #movements = [];
    // #pin; / simply define it , and later redefine...

    constructor(owner, currency, pin) {
            this.owner = owner;
            this.currency = currency;
            // Protected Property
            this._pin = pin;

            // this.#pin = pin;
            // this._movements = [];
            // this.locale = navigator.language

            console.log(`Thanks for opening an account, ${this.owner}`);
        }
        // Public interface
        // 3, Public methods

    getMovements() {
        return this._movements;

    }

    deposit(value) {
        this._movements.push(value);
        return this;
    }
    withdraw(value) {
        this.deposit(-value);
        return this;
    }
    _approveLoan(value) {
        return true;
    }
    requestLoan(value) {
        if (this._approveLoan(value)) {
            this.deposit(value);
            console.log(`Loan approved!`);
            return this;
        }
    }
    static helper() {
            console.log(`I am a helper method..`)
        }
        // 4 , Private method
        // #approveLoan(value) {
        //     return true;
        // }
}

const acc1 = new Account('Barny', 'EUR', 1111);

acc1.deposit(500);
acc1.withdraw(200);

console.log(acc1);
console.log(acc1.pin);

acc1.requestLoan(1000);
Account.helper()

// Chaining methods on objects

acc1.deposit(500).deposit(400).withdraw(150).requestLoan(30000).withdraw(1000);
console.log(acc1.getMovements())

// Practice #4

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
        console.log(`${this.make} is going with ${this.speed}km\\h`)
        return this;
    }
    get speedUS() {
        return `The ${this.make} is going with ${this.speed / 1.6} mi/h`
    }

    set speedUS(num) {
        this.speed = num * 1.6


    }
}

class EVCL extends CarCl {

    // #charge
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;
        // this.#charge = charge;
    }
    accelerate() {
        this.speed += 20;
        this.charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
        );
        return this;
    };
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        return this;
    };
}

const rivian = new EVCL("Rivian", 120, 23)
console.log(rivian)
rivian.breake()
rivian.accelerate()
rivian.chargeBattery(80);
console.log(rivian)
rivian.breake().accelerate().accelerate().breake().breake().chargeBattery(100)
console.log(rivian)
console.log(rivian.speedUS)
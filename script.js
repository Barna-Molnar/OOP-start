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
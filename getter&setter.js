////////////////////////////
///// Getter and Setter in JS ///////
////////////////////////////

const account = {
    owner: "Barni",
    movements: [100, 2000, 250],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}
console.log(account.latest)
account.latest = 50;
console.log(account.movements);
/// Example
class PersonCl {
    constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;

        }
        // Methods will be added to .prototype property but it has to be out of the constructor()
    calcAge() {
        console.log(2021 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.firstName}`)
    }
    get age() {
        return 2021 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name `)
    }
    get fullName() {
        return this._fullName
    }
}
const jessica = new PersonCl("Jessica Davis", 1995)
console.log(jessica.age)

const walter = new PersonCl('Walter White', 1999);
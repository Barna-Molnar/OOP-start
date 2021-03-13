'use strict';

///////////// classes with protypal inheritance
class PersonCl {
    constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;
        }
        // Methods will be added to .prototype property but it has to be out of the constructor()
    calcAge() {
        console.log(2021 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }
    get age() {
        return 2021 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name `);
    }
    get fullName() {
            return this._fullName;
        }
        // creating static mehtod
    static helo() {
        console.log('helo there 😎');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // ALways needs to happen first !!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I am ${2037 - this.birthYear
            } years old, but as a student I feel more like ${2037 - this.birthYear + 10
            } `
        );
    }
}
const martha = new StudentCl('Martha Davis', 2012, `Computer Science`);
martha.introduce();
martha.calcAge();
console.log(martha);
martha.calcAge();

/////////// Object.create 

const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and  I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2020, `Computer Science `);
console.log(jay);
jay.introduce();
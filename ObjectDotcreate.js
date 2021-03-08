'use strict';

const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

console.log(steven)
steven.name = "Steven"
steven.birthYear = 1995;
steven.calcAge();

console.log(steven.__proto__)
console.log(steven.__proto__ === PersonProto) // <= true

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
sarah.calcAge();
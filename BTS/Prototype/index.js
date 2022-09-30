let a = {};
let b = new Object();

console.log(a);
console.log(b);

Object.prototype.greet = 'Hello';

function c() {}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}
Person.prototype.greet = 'Hello from prototype object';

let person1 = new Person('John', 'Smith');
person1.greet = 'Hello from person1 object';

let person2 = new Person('Nick', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
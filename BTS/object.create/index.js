console.dir(Object);
 //this method 'Object.create' is a method of global object
let obj1 = Object.create(Object.prototype, {
    name: {
        value: 'John'
    }
}); //requires 2 parameters, first is mandatory.

// obj1.name = 'john';

console.log(obj1);

function Person() {
    this.name = 'John';
}
Person.prototype.greet = 'Hello';

let person1 = new Person();

let person2 = Object.create(Person.prototype);

console.log(person1);
console.log(person2);

//---------------
let firstProto = {
    sayHello: function() {
        return 'Hello ' + this.name;
    }
};

let Pascal = Object.create(firstProto, {
    name: {
        value: 'Pascal'
    }
});
console.log(Pascal);

let secondProto = Object.create(firstProto, {
    sayHi: {
        value: function() {
            return 'Hi ' + this.name;
        }
    }
});

console.log(secondProto);

let bob = Object.create(secondProto, {
    name: {
        value: 'Bob'
    }
});
console.log(bob);

//---------------------
let obj = Object.create(null);
console.log(obj);
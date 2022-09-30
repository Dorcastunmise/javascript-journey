//**********proof that arrays are objects
let arr = [1, 2, 3];
arr[3] = 4;
arr.prop = 'Hello'; //prop works on an array

console.log(arr);



//proof that functions are objects
function a() {
   console.log('Hello');
}
a['prop'] = 'Hi';
a.obj = {
    greet: 'Hey'
};
a.myFunc = function() {
    console.log('Hola');
};


// ---------- Creating objects dynamically -------------

// let person1 = {};
// person1.firstName = 'John';
// person1.lastName = 'Smith';

// let person2 = {};
// person2.firstName = 'Nick';
// person2.lastName = 'Doe';

function createPerson(firstName, lastName) {
    let newPerson = {};
newPerson.firstName = firstName;
newPerson.lastName = lastName;
return newPerson;
}

let person1 = createPerson('John', 'Smith');
let person2 = createPerson('Nick', 'Doe');
let person3 = createPerson('Bob', 'Brown');
let person4 = createPerson('Alimi', 'Tunmise');


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);



//Function Constructions

function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

let persons1 = new Person('John', 'Samantha');
let persons2 = new Person('Nick', 'Dorcas');
let persons3 = new Person('Bob', 'Babalola');
let persons4 = new Person('Alimi', 'Tolani');


console.log(persons1);
console.log(persons2);
console.log(persons3);
console.log(persons4);


//built-in function constructors

let strObj = new String('Hello');
console.log(strObj);
console.log(typeof strObj);
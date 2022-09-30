const arr = [10, 20, 30, 40, 51, 60];

// const [ten, twenty, ...items] = arr;
// console.log(ten, twenty, ...items);
// or
const [ten, twenty, , , fiftyOne] = arr;
console.log(ten, twenty, fiftyOne);


const person = {
    firstName: `John`,
    lastName: `Smith`,
    age: 30
};
const { firstName, age, lastName} = person;
console.log(age, firstName, lastName);
//or

const aboutMe = john => {
    const {firstName, lastName, age} = john;
console.log(`I am ${firstName}${lastName} and I am ${age} years old`);
}
aboutMe(person);
const numbers1 = [1, 2, 3, 4,];
const numbers2 = [5, 6, 7, 8, 9];
let numbers3 = [];
numbers3 = numbers3.concat(numbers1);
numbers3.push(10);
numbers3 = numbers3.concat(numbers2);
const numbers4 = [10, ...numbers1, 20, ...numbers2, 30];

console.log(numbers3);
console.log(numbers4);

console.log(`--------------`);

let names = [`Jane`, `Bob`, `Alex`, `Annn`];
let namesCopy = [...names];
names.push(`John`);
console.log(names);
console.log(namesCopy);

console.log(`--------------`);

function sum(x, y, z) {
    console.log(x + y + z);
}
let numbers = [10, 20, 30, 40];
sum(...numbers);
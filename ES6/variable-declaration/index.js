// b value cannot be obtained 'cos it is function scope
// function a() {
//     var b = 10;
// }
// console.log(b);
// b value cannot be obtained when using let & const
// function a() {
//     let b = 10;
// }
// console.log(b);
// b value can be obtained'cos it is not block scoped
// if(true) {
//     var b = 10;
// }
// console.log(b);
/* b value cannot be obtained when using let & const 'cos
they are block scoped
*/
// if() {
//     let b = 10;
// }
// console.log(b);
var five = 7;
five = 20;
console.log(five);
let firstName = 'Nick';
const person = {
    name: 'Jane', 
    age: 18
}

if(true) {
    firstName = 'hannah';
    person.age = 19;
}
console.log(person);
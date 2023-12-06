/*A this keyword used in an arrow function references
thw window object while a this keyword used in normal
function references the object it is written in.

Destructuring means taking out the specific 
properties of an object*/

const user = {
    name: "Alimi Oluwatunmise",
    age: 24,
    level: "Entry level",
    understood: true,
};
for (key in user) {
    console.log(user[key]);
}

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());
console.log(shape.perimeter());
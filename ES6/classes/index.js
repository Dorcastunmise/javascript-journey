function PersonES5(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
PersonES5.prototype.aboutPerson = function() {
    console.log(`My name is ${this.firstName} ${this.lastName} 
    and I am ${this.age} years old`);
}
function DeveloperES5(firstName, lastName, age, experience, projects) 
{
    PersonES5.call(this, firstName, lastName, age);
    this.experience = experience;
    this.projects = projects;
}
DeveloperES5.prototype = Object.create(PersonES5.prototype);

DeveloperES5.prototype.aboutDev = function() {
    console.log(
    `My name is ${this.firstName} ${this.lastName} and I am
    ${this.age} years old with ${this.experience} years of 
    experience & I have participated in ${this.projects}
    projects`);
}
const nickES5 = new PersonES5(`Nick`, `Smith`, 28);
const alexDev = new DeveloperES5(`Alex`, `Brown`, 30, 10, 20);
nickES5.aboutPerson();
alexDev.aboutPerson();
alexDev.aboutDev();



console.log(`---------------------------`);


class PersonES6 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    aboutPerson() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    }
}
class DeveloperES6 extends PersonES6 {
    constructor(firstName, lastName, age, experience, projects) {
        super(firstName, lastName, age);
        this.experience = experience;
        this.projects = projects;
    }
    aboutDev() {
        console.log(
            `My name is ${this.firstName} ${this.lastName} and I am
            ${this.age} years old with ${this.experience} years of 
            experience & I have participated in ${this.projects}
            projects`);
    }
}
const nickES6 = new PersonES6(`Nick`, `Smith`, 28);

const bobDev = new DeveloperES6(`Bob`, `James`, 40, 15, 21);
nickES6.aboutPerson();
bobDev.aboutDev();

// console.log(typeof PersonES6);
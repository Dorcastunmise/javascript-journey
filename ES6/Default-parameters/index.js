function person(firstName, lastName, profession) {
    if(lastName === undefined) {
        lastName = `Sowore`;
    }
    if(profession === undefined) {
        profession = `programmer`;
    }
console.log(`I am ${firstName} ${lastName} and I'm a ${profession}`);
}
person(`John`);

console.log(`----------------`);

function persons(firstName, lastName, profession) {
    if(lastName === undefined) {
        lastName = `Sowore`;
    }
    if(profession === undefined) {
        profession = `programmer`;
    }
console.log(`I am ${firstName} ${lastName} and I'm a ${profession}`);
}
persons(`Osofia`, `Anike`, `Dancer`);


console.log(`----------------`);


function personnel(firstName, lastName, profession) {
    if(lastName === undefined) {
        lastName = `Sowore`;
    }
    profession = profession || `programmer`;
console.log(`I am ${firstName} ${lastName} and I'm a ${profession}`);
}
personnel(`John`);

console.log(`----------------`);


function personal(
    firstName = `Sasuke`, 
    lastName = `Hinata`,
    profession = `Gymnast`) 
{
console.log(`I am ${firstName} ${lastName} and I'm a ${profession}`);
}
personal(`John`);
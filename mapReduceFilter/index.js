const users = [
    {first: "Sasuke", lastName: "Hinata", age: 26},
    {first: "Samantha", lastName: "Ajas", age: 75},
    {first: "Sarabella", lastName: "Kina", age: 50},
    {first: "Simeon", lastName: "Hindu", age: 26}
];
//to get the users full name
const output = users.map((x) => x.first + " " + x.lastName);
console.log(output);

//To get how many people with required age
const ageOutput = users.reduce(function (middle, curr) {
    if(middle[curr.age]) {   //if middle age is not present 
        middle[curr.age] = ++middle[curr.age];
    }
    else {
        middle[curr.age] = 1;
    }
    return middle;
}, {});     //intial value is an empty object
console.log(ageOutput);

//first name of all the people less than 30 thru chaining
const thirtyOutput = users.filter((x) => x.age < 30).map((x) => x.first);
console.log(thirtyOutput);

//first name of all the people less than 30 thru reduce
const thirtyReduce = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc = curr.first;
    }
    else {
        "Member out"
    }
    return acc;
}, {})
console.log(thirtyReduce);
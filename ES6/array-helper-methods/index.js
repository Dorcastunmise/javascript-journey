let packages = ['bag', 'purse', 'makeup', 'tops'];

for(let i = 0; i < packages.length; i++) {
    console.log('I bought ' + packages[i] + 
    ' at the shopping mall');
}

console.log('---------------------');

/*helper methods
forEach()
*/
packages.forEach(function(package) {
    console.log('the ' + package +
    ' looks spoilt');
});

console.log('---------------------');

/*helper methods
map()
*/
let numbers = [1, 2, 3, 4, 5];
let newArray = [];
for(let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * 10);
}
console.log(numbers);
console.log(newArray);

let second = numbers.map(function(number) {
    return number * 10;
});
console.log(numbers);
console.log(second);

/* 2nd example
*/
let names = [
    {firstName: 'Taminia', lastname: 'Folake'},
    {firstName: 'bdus', lastname: 'cjwui'},
    {firstName: 'wcwe', lastname: 'ewdcqaw'}
];
let people = names.map(function(name) {
    return name.firstName;
});
console.log(names);
console.log(people);


console.log('---------------------');


/*helper methods
filter()/find()
*/
let everybody = [
    {oruko: 'Mary', gender: 'female'},
    {oruko: 'Tiguk', gender: 'male'},
    {oruko: 'ytif', gender: 'female'}
];
let males = [];
for(let i = 0; i < everybody.length; i++) {
    if(everybody[i].gender === 'male') {
        males.push(everybody[i]);
    }
}
console.log(everybody);
console.log(males);

console.log('---------------------');
let females = everybody.filter(function(everyperson) {
    return everyperson.gender === 'female';
});
console.log(females);
/* find() diff. 4rm filter: it stops iterating over the 
array to find another true event once the aim is met.
*/
let female = everybody.find(function(lady) {
    return lady.gender === 'female';
});
console.log(female);


console.log('---------------------');
console.log('---------------------');

/*helper methods
every()/some()
*/

let voters = [
    {title: 'Mrs Adenuga', age: 32},
    {title: 'Mr Adenuga', age: 46},
    {title: 'Miss Paige', age: 36},
    {title: 'Mr Felix', age: 32},
    {title: 'Mr Fletcher', age: 62}
];
let everyPersonCanVote = true;
let somePeopleCanVote = false;

for(let i = 0; i < voters.length; i++) {
    if(voters[i].age < 18) {
        everyPersonCanVote = false,
        somePeopleCanVote = true;
    }
}
console.log('every person can vote ooo - ' + 
everyPersonCanVote);
console.log('some people can still vote - ' + 
somePeopleCanVote);
/*every() uses logical ampersand (&&) operator. Responds with
'false' when one of the event is wrong
*/
let every = voters.every(function(voter) {
    return voter.age >= 18;
})
console.log(every);
/*some() uses logical or (||) operator. Responds with 'true' 
when at least one of the event is true
*/
let some = voters.some(function(vote) {
    return vote.age <= 18;
})
console.log(some);

console.log('---------------------');
console.log('---------------------');

/*helper methods
reduce()
*/
let digits = [100, 200, 300];
let summer = 0;
for(let i = 0; i < digits.length; i++) {
    summer += digits[i];
}
console.log(summer);

console.log('---------------------');
let total = digits.reduce(function(previous, digit) {
/* previous also called 'accumulator'. 
    Accumulates values after each iteration.*/
    return previous + digit;
}, 0); // 0 is the initial value
console.log(total);

let weeklyEarnings = [750, 642, 823, 1456];
let income = weeklyEarnings.reduce(function(previous, weeklyEarning) {
    return previous + weeklyEarning;
}, 5000);
console.log(income);
console.log('---------------------');
let firstNames = ['John', 'Jane', 'Mary'];
let lastnames = ['Smith', 'Doe', 'Brown'];
let fullNames = firstNames.reduce(function(previous, firstOruko, index) {
    previous.push(firstOruko + ' ' + lastnames[index]);
    return previous;
}, []);
console.log(fullNames);
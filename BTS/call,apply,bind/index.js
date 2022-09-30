var person = {
    firstName: 'John', 
    lastName: 'Smith',
    fullName: function() {
        return this.firstName + ' ' +
        this.lastName;
    }
};

var secure = {
    firstName: 'Nick', 
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' +
        this.lastName;
    }
};

console.log(person.fullName.call(secure));

var definitePerson = function(age, job) {
    console.log(this.fullName() + 
    ' is ' +
    age + 
    ' years old and he is a ' + 
    job);
};
definitePerson.call(person, 28, 'developer');
definitePerson.apply(person, [43, 'carpenter']);

// syntax of bind()
let personDetail = definitePerson.bind(person);
personDetail(18, 'student');

let personnelDetail = definitePerson.bind(person, 21);
personnelDetail('graduate');
personnelDetail('fitness coach');

let thirdDetail = definitePerson.bind(person, 38, 'sound engineer');
thirdDetail();


let firstDetail = definitePerson.bind(secure, 35, 'security');
firstDetail();
let firstDetails = definitePerson.apply(secure, [72, 'tennis coach']);

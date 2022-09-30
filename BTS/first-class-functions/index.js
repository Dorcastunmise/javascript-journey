//1.  1st class functions stores function in a variable
let reaction = () => {
    console.log('Hello');
}
reaction();

//2. 1st class functions can pass a function as a parameter
function sum(num1, num2, fn) {
    console.log(num1 + num2);
    console.log(fn());
}
sum(5, 10, function() {
    return 'Function executed'
});

//2. 1st class functions can use a function as a variable
function sum(num1, num2, fn) {
    console.log(num1 + num2);
    console.log(fn());
}
function done() {
    return 'Function executed'
}
sum(5, 10, done);

//---------------------------------------
let scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
    let newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

function passOrFail(score) {
    return score >= 51;
}
function difference(score) {
    return score - 51;
}
console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, difference));

//3s. 1st class functions can return a function 4rm oda function
function finalResult(score) {
    if(score >= 81) {
        return function(name) {
            console.log(name + ', you passed an exam and you are a student of State University');
        }
    }else if (score >= 51) {
       return function(name) {
        console.log(name + ', you passed an exam and you are a student of State College');
       }
    }else {
            return function(name) {
                console.log(name + ', you failed');
            }
    }
}
let results = finalResult(77);
results('Doe');
finalResult(96)('Mary');
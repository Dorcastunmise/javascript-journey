/* In currying a function takes one argument at a time
and then returns a new function expecting the next argument
Reasons currying is used: 
To avoid passing arguments multiple times
To make function pure and less prone to error
To create higher-order functions
*/ 

// function curriedExample(a) {
//     return function (b) {
//         return `${a} ${b}`;
//     };
// }
// console.log(curriedExample(4)(5));

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 6, 1));

//Curry format
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(addition(2)(6)(1));

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if(operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "subtract") return a - b;
            else "invalid opeartion";
        };
    };
} 

console.log(evaluate("sum"(4)(2)));
const mul = console.log(evaluate("multiply"));
console.log(mul(2)(17));
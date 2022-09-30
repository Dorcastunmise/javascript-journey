function platform() { //function statement
    var c = 'from function platform';
    return c;
}

let axe = function() { //function expression
    var c = 'from function axe';
    return c;
}

var c = 10;
var c = 20;

console.log(c);
console.log(platform());
console.log(axe());


//IIFE Samples with different syntax
(function() { 
    console.log('The first');
})();

(function(name) { 
    console.log('man is ' + name);
}('John'));
(function(name) { 
    console.log('with his wife, ' + name);
})('Anita');

let a = function() {
    console.log('so....hi');
    return 'Hello';
}();
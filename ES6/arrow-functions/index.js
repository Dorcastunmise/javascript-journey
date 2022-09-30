const numbers = [2, 4, 8, 10];
let double = numbers.map(number => 
    number * 5);
    console.log(double);
let stranger = numbers.reduce((previous, strange) =>
    {return previous + strange}, []);
console.log(stranger);
let accounts = numbers.forEach(account => {
    console.log(account)});


const multiply = () => ({firstName: 'John'});
console.log(multiply());

const personES6 = {
    firstReader: 'Nick',
    lastName: 'Doe',
    fullName: function() {
        return () => {
            console.log(this);
            console.log(`${this.firstReader} ${this.lastName}`);
        }
    }
}

personES6.fullName()(); 
//to invoke return function, two parenthesis are used.


console.log(`--------------`);
document.querySelector(`h1`).addEventListener(`click`, function() {
    console.log(this);
    let a = () => {
        this.style.color = `red`;
    }
    a();
});
//Map transforms an array entire elements and a create a new array out of it

const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}
const doubleOutput = arr.map(double);
console.log(doubleOutput);


const tripleOutput = arr.map((x) =>  x * 3);//higher-order function 
console.log(tripleOutput);

function binary(x) {
    return x.toString(2);
}
const binaryFormat = arr.map(binary);
console.log(binaryFormat);
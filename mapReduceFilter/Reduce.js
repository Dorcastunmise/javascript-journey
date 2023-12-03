//Reduce involves iterating over every elements of an array an coming up with a single value out of them
const arr = [5, 1, 3, 2, 6];
function findSum(arr) {
    sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum +arr[i];
        }
        return sum;
}
console.log(findSum(arr));

//Instead
const reduceOutput = arr.reduce(function(acc, curr) { //acc = accumulator, current = current values
    acc = acc + curr;
    return acc;
}, 0);      //0 is to initialize the acc like line 4 where sum was initialized to 0
console.log(reduceOutput);


//  Maximum value
function findMax(arr) {
    let max = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];  //arr[i] is each arr element
            }
        }
        return max;
}
console.log(findMax(arr));

const maxReduce = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr; 
    }
    return max;
}, 0);
console.log(maxReduce);
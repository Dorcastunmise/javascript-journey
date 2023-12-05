/*
Map returns the whole array with 2 added to each of the items
*/
const studentAges = [2, 3, 5, 7, 1];
function isOdd(x) {
    return x % 2;
}
/*
Map returns the whole array with 2 added to each of the items, there will be no modification
Map enables chaining methods
*/

const mappedAges = studentAges.map((arr) => arr + 2).filter(isOdd);

/* forEach returns nothing i.e undefined
    forEach does not accept chaining methods
*/
const forEachAges = studentAges.forEach((arr, i) => arr[i] = arr + 3);

console.log(mappedAges, forEachAges, studentAges);
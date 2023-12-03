/* Slice: can only take 2 parameters- begining and end.
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the 
end of the array. For example, -2 refers to the second to last element of the array.

Splice: Removes elements from an array and, if necessary, 
inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.

Push: Appends new elements to the end of an array, and returns the new length of the array.

Pop: Removes the last element from an array and returns it. 
If the array is empty, undefined is returned and the array is not modified.
*/
const arr = [2, 6, 8, 11, 46, 32, 3];


console.log(arr.slice(2, 4)); 
console.log(arr.splice(2, 4, "learning", "phase"));

function square(element, i, array) {
    array[i] = Math.pow(element, 2)   //raising the base element to the power of 2
}
console.log(arr.forEach(square));
console.log(arr.push(3)); //appends elements/values to the end of the array
console.log(arr.pop()); //pop removes the last element of array and returns it


const fruits = ["pawpaw", "banana", "apple", "orange", "lemon"];


function selection(element, index, array) {
    if(array[index] = element.toUpperCase()) {
        element.toLowerCase()
    }
    else {
        element.toUpperCase();
    }
}
function display(element) {
    console.log(element);
}
function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); //to capitalize first letter
}
fruits.forEach(selection);
fruits.forEach(display);